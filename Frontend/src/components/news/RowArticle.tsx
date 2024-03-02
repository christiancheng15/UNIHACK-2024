import { Link } from "react-router-dom";
import IArticle from "../../models/IArticle";
import { capitaliseFirstLetter } from "../../util/util";
import Image from "../general/Image";
import Button, { BUTTON_TYPES } from "../input/Button";
import { MdOpenInNew, MdShare, MdStar, MdThumbUp } from "react-icons/md";
import { useAPIContext } from "../../contexts/useAPIContext";


interface IRowArticle {
    article: IArticle
}

export default function RowArticle({
    article,
}: IRowArticle) {
    const api = useAPIContext()

    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }
    const dateString = article.date.toLocaleDateString('en-US', options)
    const category = capitaliseFirstLetter(article.category)

    return (
        <div className="bg-[var(--backgroundColor4)] container2 !gap-4 !p-0 !items-start overflow-hidden w-full">
            <p className="text-[var(--textColorLight)] font-semibold px-6 pt-2">{dateString} / {category}</p>

            <div className="horizontalContainer px-4">
                <div className="h-16 w-16">
                    <Link
                        to={article?.source_url}
                        target="_blank" rel="noopener noreferrer"
                    >
                        <Image
                            src={article?.source_icon}
                            className={"rounded-full h-16 w-16 border-[2px] border-solid border-[var(--backgroundColor8)]"}
                            imgClassName={"object-cover"}
                            disableRounding={true}
                        />

                    </Link>

                </div>

                <h2>{article?.title}</h2>
            </div>


            <div className="w-full h-16 bg-[var(--backgroundColor4)] self-end horizontalContainer !justify-evenly mt-auto">
                <Button
                    type={BUTTON_TYPES.transparent}
                    text={"Like"}
                    className={"font-bold"}
                    icon={MdThumbUp}
                />
                <Button
                    onClick={() => article?.isSaved ? api.unsaveArticle(article) : api.saveArticle(article)}
                    type={BUTTON_TYPES.transparent}
                    text={article?.isSaved ? "Saved" : "Save"}
                    icon={MdStar}
                    className={"font-bold"}
                    textColor={article?.isSaved ? "warningColor" : undefined}
                />
                <Button
                    type={BUTTON_TYPES.transparent}
                    text={"Share"}
                    className={"font-bold"}
                    icon={MdShare}
                />
            </div>
        </div>
    )
}