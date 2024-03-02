import { CONSTANTS } from "../../util/constants";
import BaseModal from "./BaseModal";

interface IInfoDialog {
    icon?: JSX.ElementType | null,
    iconColor?: string | null,
    title?: string | null,
    text?: string | string[] | null,
    onClose?: Function | null,
    className?: string | null
}

export default function InfoDialog({ icon: Icon, iconColor, title, text, onClose, className }: IInfoDialog) {
    return (
        <BaseModal
            onClose={onClose}
        >
            <div className={`flex flex-col items-center justify-center gap-2 ${className ?? ""}`}>
                {
                    Icon && <Icon size={CONSTANTS.sizes.icon.xl2} color={iconColor ?? "var(--primaryColor)"} />
                }

                <h2 className="font-bold">{title}</h2>
            </div>

            <p className="text-center">{typeof text === 'string' ? text : Array.isArray(text) ? (text?.map((txt: string) => (<p>{txt?.msg ?? txt}</p>))) : ""}</p>
        </BaseModal>
    )
}