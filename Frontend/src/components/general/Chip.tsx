import { CONSTANTS } from "../../util/constants"

interface IChip {
    text: string,
    icon?: JSX.ElementType | null,
    iconColor?: string | null,
    bgColor?: string | null
}

export default function Chip({ text, icon: Icon, iconColor, bgColor }: IChip) {
    const bgColor1 = bgColor ? bgColor : "var(--primaryColorLight)"
    const iconColor1 = iconColor ? iconColor : "var(--primaryColor)"

    return (
        <div className="chipStyle1" style={{ backgroundColor: bgColor1 }}>
            {
                Icon && (
                    <div style={{ color: iconColor1 }}>
                        {
                            Icon && <Icon size={CONSTANTS.sizes.icon.md} color={iconColor ?? "var(--primaryColor)"} />
                        }
                    </div>
                )
            }


            <small>{text}</small>
        </div>
    )

}