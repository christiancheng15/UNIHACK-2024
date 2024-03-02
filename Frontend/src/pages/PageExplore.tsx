import { useEffect, useState } from "react";
import LargeArticle from "../components/news/LargeArticle";
import TemplatePage from "./template/TemplatePage";
import IArticle from "../models/IArticle";
import LoadingSpinner from "../components/general/LoadingSpinner";
import InfoView from "../components/general/InfoView";
import { useAPIContext } from "../contexts/useAPIContext";
import InputBox from "../components/input/InputBox";

export default function PageExplore() {
    const api = useAPIContext()
    const [isLoadingArticles, setIsLoadingArticles] = useState<boolean>(true)
    const [searchText, setSearchText] = useState<string>('')

    useEffect(() => {
        api.fetchNews({
            disableErrorDialog: true
        }).finally(() => setIsLoadingArticles(false))

    }, [])

    return (
        <TemplatePage
            height={"100%"}
            title={"Explore News"}
        >

            {
                isLoadingArticles ? (
                    <LoadingSpinner
                    />
                ) : api.articles.length === 0 ? (
                    <div className="h-full w-full flex items-center justify-center">
                        <InfoView
                            title={"Unable to load articles"}
                        />
                    </div>

                ) : (
                    <div className="h-full w-full">
                        <InputBox
                            type="text"
                            fullWidth={true}
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder={"Search articles..."}
                            className={"mb-4"}

                        />
                        {
                            api.articles.map((article: IArticle, i: number) => (
                                <div className="py-4" key={i}>
                                    <LargeArticle
                                        article={article}

                                    />
                                </div>
                            ))
                        }


                    </div>
                )
            }




        </TemplatePage>
    )
}