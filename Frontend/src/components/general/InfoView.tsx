import { MdError } from "react-icons/md"
import { CONSTANTS } from "../../util/constants"
import IError from "../../models/api"

interface IInfoView {
    icon?: JSX.ElementType | null,
    iconColor?: string | null,
    title?: string | null,
    text?: string | string[] | null | IError[] | IError,
    className?: string | null
}

export default function InfoView({ icon: Icon, iconColor, title, text, className }: IInfoView) {
    return (
        <div className="verticalContainer p-8">
            <div className={`flex flex-col items-center justify-center gap-2 ${className ?? ""}`}>
                {
                    Icon ? <Icon size={CONSTANTS.sizes.icon.xl2} color={iconColor ?? "var(--primaryColor)"} /> : <MdError size={CONSTANTS.sizes.icon.xl2} color={iconColor ?? "var(--primaryColor)"} />
                }

                <h2 className="font-bold">{title}</h2>
            </div>

            <p className="text-center">{typeof text === 'string' ? text : Array.isArray(text) ? (text?.map((txt) => (<p>{typeof txt === 'string' ? txt : txt?.msg}</p>))) : ""}</p>
        </div>
    )
}