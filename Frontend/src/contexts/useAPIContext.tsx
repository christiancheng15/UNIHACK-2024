import { ReactNode, createContext, useContext, useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import axios, { AxiosResponse } from "axios";
import InfoDialog from "../components/general/InfoDialog";
import { IAPIRequest, IApiRequestProps } from "../models/api";
import { FaCheck } from "react-icons/fa6";
import IArticle from "../models/IArticle";

const APIContext = createContext<any>({})
axios.defaults.withCredentials = true

interface APIProviderProps {
    children: ReactNode;
}

const ENV_API_URL = import.meta.env.VITE_API_ADDRESS

export function APIProvider({ children }: APIProviderProps) {
    const { addErrors, setModal } = useGlobalContext()
    const [articles, setArticles] = useState<IArticle[]>([])

    interface IMessage {
        color?: string | null,
        type?: string | null,
        message?: string | null

    }

    interface IHandleAPIError {
        res: any,
        message?: IMessage,
        disableErrorDialog?: boolean | null
    }

    function handleAPIError(
        {
            res,
            message = {
                message: "Unspecified Error",
            },
            disableErrorDialog = false
        }: IHandleAPIError
    ) {

        if (!message?.message) {
            message.message = "Unspecified Error";
        }

        if (
            typeof res?.response?.data?.error !== "undefined" &&
            res?.response?.data
        ) {
            for (let i = 0; i < res.response.data.error.length; i++) {
                res.response.data.error[i].code = res?.response?.status;
            }
            if (!disableErrorDialog) addErrors(res.response.data.error);
            return { status: false, error: [{ msg: message?.message }] };
        } else if (!res?.response?.data) {
            if (!disableErrorDialog) addErrors([{ msg: "Cannot reach server. Please check your network connection.", code: null }]);
            return { status: false, error: [{ msg: "Cannot reach server. Please check your network connection." }] };
        } else {
            if (!disableErrorDialog) addErrors([
                {
                    msg: res?.message ? res.message : "Unspecified Error",
                    code: res?.response?.status,
                },
            ]);
            return {
                status: false,
                error: [{ msg: res?.message ?? "Unspecified Error" }],
            };
        }
    }

    function handleAPISuccess() {
        setModal(
            <InfoDialog
                icon={FaCheck}
                iconColor={"var(--successColor)"}
                title={"Action completed successfully"}
            />
        )
    }


    async function apiRequest({ method, endpoint, data, params, showSuccessModal, validationFunction, onError, disableErrorDialog }: IAPIRequest): Promise<any> {
        try {
            if (validationFunction) {
                const validation = validationFunction(data ?? params)
                if (validation?.status === false) {
                    addErrors(validation.error)
                    return validation
                }
            }


            const response: AxiosResponse = await axios({
                method: method,
                url: `${ENV_API_URL}${endpoint}`,
                data,
                params
            })

            if (response?.status && showSuccessModal) {
                handleAPISuccess()
            }

            return response.data
        } catch (err: any) {
            if (onError) onError(err)


            return handleAPIError({
                res: err,
                disableErrorDialog
            })
        }
    }


    async function fetchNews({
        disableErrorDialog = false
    }: IApiRequestProps = {}) {
        const res = await apiRequest({
            method: 'get',
            endpoint: '/fetch-news',
            disableErrorDialog
        })

        if (res) {
            for (let i = 0; i < res.length; i++) {
                res[i].date = new Date(res[i].date)

            }
            addArticles(res)
        }

        return res
    }

    interface ISavedArticles {
        title?: string | null,
        content?: string | null
    }

    function savedArticles({
        title,
        content
    }: ISavedArticles = {}) {
        return articles.filter((article: IArticle) => {
            if (!article?.isSaved) return false

            let titleFound = false
            if (title && article.title.toLowerCase().includes(title.toLowerCase())) {
                titleFound = true
            }

            let contentFound = false
            if (content) {
                for (const text of article.summarised_text) {
                    if (text.toLowerCase().includes(content.toLowerCase())) {
                        contentFound = true
                        break
                    }
                }
            }

            return (Boolean(title) === titleFound) || (Boolean(content) === contentFound)
        })

    }

    function unsaveArticle(article: IArticle) {
        setArticles((prevState: IArticle[]) => {
            const newState = [...prevState]
            for (let i = 0; i < newState.length; i++) {

                if (newState[i].id == article.id && newState[i]?.isSaved) {
                    newState[i].isSaved = false
                    return newState
                }

            }

            return newState
        })
    }

    function saveArticle(article: IArticle) {
        setArticles((prevState: IArticle[]) => {
            const newState = [...prevState]
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].id == article.id && !newState[i]?.isSaved) {
                    newState[i].isSaved = true
                    break
                }

            }
            return newState
        })
    }



    function addArticles(newArticles1: IArticle[]) {
        const newArticles: IArticle[] = newArticles1

        setArticles((prevState: IArticle[]) => {
            const newState = prevState.map((prevStateArticle) => {
                const foundArticle = newArticles.find((newArticle: IArticle) => newArticle.id === prevStateArticle.id);
                if (foundArticle) {
                    foundArticle.isSaved = prevStateArticle?.isSaved
                }

                return foundArticle ? foundArticle : prevStateArticle;
            });

            newArticles.forEach((newArticle: IArticle) => {
                if (!prevState.some((prevStateArticle) => prevStateArticle.id === newArticle.id)) {
                    newState.push(newArticle);
                }
            });

            return newState;

        })
    }


    const value = {
        articles,
        savedArticles,
        fetchNews,
        saveArticle,
        unsaveArticle,
        addArticles


    }

    return (
        <APIContext.Provider value={value}>{children}</APIContext.Provider>
    )
}

export const useAPIContext = () => useContext(APIContext);