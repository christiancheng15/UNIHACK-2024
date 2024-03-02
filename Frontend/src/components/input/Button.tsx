import { CSSProperties, FormEventHandler } from "react"
import { CONSTANTS } from "../../util/constants"
import LoadingSpinner from "../general/LoadingSpinner"

export enum BUTTON_TYPES {
    tile,
    normal,
    roundedFull,
    transparent,
    none
}



interface IButton {
    isLoading?: boolean | null,
    disabled?: boolean | null,
    type: BUTTON_TYPES,
    onClick?: FormEventHandler<HTMLButtonElement> | null,
    icon?: JSX.ElementType | null,
    text?: string | null,
    element?: JSX.Element | null,
    fullWidth?: boolean | null,
    fullHeight?: boolean | null,
    className?: string | null,
    color?: string | null,
    hexColor?: string | null,
    textColor?: string | null,
    textHexColor?: string | null,
    fontWeight?: string | null,
    style?: CSSProperties | null,
    showLoadingSpinner?: boolean | null,
    iconSize?: number | null,
    disableBorder?: boolean | null,
    iconPosition?: string | null
}

export default function Button({
    type,
    onClick,
    icon: Icon,
    text,
    element,
    fullWidth = false,
    fullHeight = false,
    className,
    color,
    hexColor,
    textColor,
    textHexColor,
    fontWeight,
    disabled,
    isLoading = false,
    style: sx,
    iconSize,
    showLoadingSpinner,
    iconPosition
}: IButton): JSX.Element {
    const style: CSSProperties = sx ? {
        backgroundColor: type === BUTTON_TYPES.transparent ? "transparent" : color ? `var(--${color})` : hexColor ? hexColor : undefined,
        color: textColor ? `var(--${textColor})` : textHexColor ? textHexColor : type === BUTTON_TYPES.transparent ? "var(--textColor)" : undefined,
        fontWeight: fontWeight ?? undefined,
        boxShadow: type === BUTTON_TYPES.transparent ? "none" : undefined,
        ...sx
    } : {
        backgroundColor: type === BUTTON_TYPES.transparent ? "transparent" : color ? `var(--${color})` : hexColor ? hexColor : undefined,
        color: textColor ? `var(--${textColor})` : textHexColor ? textHexColor : type === BUTTON_TYPES.transparent ? "var(--textColor)" : undefined,
        fontWeight: fontWeight ?? undefined,
        boxShadow: type === BUTTON_TYPES.transparent ? "none" : undefined,
    }

    let typeString = "button "
    if (type !== BUTTON_TYPES.none) {
        if (type === BUTTON_TYPES.roundedFull) {
            typeString += " buttonRounded"
        } else {
            typeString += ' buttonRounded2'
        }

        if (type === BUTTON_TYPES.tile) {
            typeString += ' tileButton tileButtonColor'
        } else {
            typeString += ' normalButton buttonColor'
        }
    } else {
        typeString = ""
    }



    disabled = disabled as boolean
    isLoading = isLoading as boolean

    return (
        <button
            disabled={disabled ? disabled : isLoading ? isLoading : undefined}
            style={style}
            className={` 
        ${typeString} 
        ${fullWidth ? "w-full" : ""}
        ${fullHeight ? "h-full" : ""}
        ${className ? className : ""}
        ${isLoading ? "!brightness-[95%]" : ""} 
        text-nowrap 
        `}

            //${!disableBorder ? "hover:border-[var(--primaryColor)] border-[1px] border-solid" : ""}


            onClick={onClick ?? undefined}>

            {
                showLoadingSpinner ? (
                    <>
                        {!isLoading && Icon && (<Icon size={iconSize ?? CONSTANTS.sizes.icon.md} />)}
                        {!isLoading && text}
                        {isLoading ? (
                            <LoadingSpinner width={"1.5rem"} />
                        ) : element}
                    </>
                ) : (
                    <>
                        {
                            iconPosition === 'left' ? (
                                <>
                                    {Icon && (<Icon size={iconSize ?? CONSTANTS.sizes.icon.md} />)}
                                    {text}
                                    {element}
                                </>
                            ) : iconPosition === 'right' ? (
                                <>
                                    {text}
                                    {element}
                                    {Icon && (<Icon size={iconSize ?? CONSTANTS.sizes.icon.md} />)}
                                </>
                            ) : (<>
                                {Icon && (<Icon size={iconSize ?? CONSTANTS.sizes.icon.md} />)}
                                {text}
                                {element}
                            </>)
                        }

                    </>
                )
            }

        </button>
    )
}