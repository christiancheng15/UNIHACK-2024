import TemplatePage from "./template/TemplatePage";
import IArticle from "../models/IArticle";
import { useAPIContext } from "../contexts/useAPIContext";
import InfoView from "../components/general/InfoView";
import RowArticle from "../components/news/RowArticle";
import InputBox from "../components/input/InputBox";
import { useState } from "react";

export default function PageSavedArticles() {
    const api = useAPIContext()
    const [searchText, setSearchText] = useState<string>('')


    return (
        <TemplatePage
            title={"Saved Articles"}
        >
            <div className="h-full w-full">
                <InputBox
                    type="text"
                    fullWidth={true}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder={"Search saved articles..."}
                    className={"mb-4"}
                />

                {
                    api.savedArticles({ title: searchText, content: searchText }).length > 0 ? api.savedArticles({ title: searchText, content: searchText }).map((article: IArticle, i: number) => (
                        <div className=" py-4" key={i}>
                            <RowArticle
                                article={article}

                            />
                        </div>
                    )) : (
                        <div className="h-full w-full flex items-center justify-center">
                            <InfoView
                                title={"Saved articles will appear here"}
                                text={"It appears you haven't saved any articles yet. Click Save on any article to save it!"}
                            />
                        </div>
                    )
                }

            </div>


        </TemplatePage>
    )
}