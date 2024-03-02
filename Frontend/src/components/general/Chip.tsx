import { CONSTANTS } from "../../util/constants"

interface IChip {
    text: string,
    icon?: JSX.ElementType | null,
    iconColor?: string | null,
    bgColor?: string | null,
    className?: string | null
}

export default function Chip({ text, icon: Icon, iconColor, bgColor, className }: IChip) {
    const bgColor1 = bgColor ? bgColor : "var(--primaryColor)"
    const iconColor1 = iconColor ? iconColor : "var(--primaryLight)"

    return (
        <div className={`chipStyle1 ${className ? className : ""}`} style={{ backgroundColor: bgColor1 }}>
            {
                Icon && (
                    <div style={{ color: iconColor1 }}>
                        {
                            Icon && <Icon size={CONSTANTS.sizes.icon.md} color={iconColor1} />
                        }
                    </div>
                )
            }


            <small>{text}</small>
        </div>
    )

}