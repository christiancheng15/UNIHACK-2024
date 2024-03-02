import { useEffect, useState } from "react";
import LargeArticle from "../components/news/LargeArticle";
import TemplatePage from "./template/TemplatePage";
import IArticle from "../models/IArticle";
import axiosInstance from "../util/api";
import LoadingSpinner from "../components/general/LoadingSpinner";

export default function PageExplore() {
    const [articles, setArticles] = useState<IArticle[]>([])
    const [isLoadingArticles, setIsLoadingArticles] = useState<boolean>(true)

    useEffect(() => {
        axiosInstance.get('http://localhost:8000/fetch-news').then((res: any) => {
            for (let i = 0; i < res.data.length; i++) {
                res.data[i].date = new Date(res.data[i].date)

            }
            setArticles(res.data)
        }).finally(() => setIsLoadingArticles(false))
    }, [])

    return (
        <TemplatePage
            height={"100%"}
            topTitle={"Read"}
            disablePadding={true}
        >

            {
                isLoadingArticles ? (
                    <LoadingSpinner

                    />
                ) : (
                    <div className="h-full w-full">
                        {
                            articles.map((article: IArticle, i: number) => (
                                <div className=" py-4" key={i}>
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