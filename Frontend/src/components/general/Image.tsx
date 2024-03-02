import { CSSProperties, useState } from "react"
import LoadingSpinner from "./LoadingSpinner"

interface IImage {
    src?: string | null,
    className?: string | null,
    imgClassName?: string | null,
    style?: CSSProperties | null,
    imgStyle?: CSSProperties | null,
    alt?: string | null,
    disableLoadingSpinner?: boolean | null,
    disableAnimation?: boolean | null,
    disableRounding?: boolean | null
}

export default function Image({
    src,
    className,
    imgClassName,
    style,
    imgStyle,
    alt,
    disableLoadingSpinner,
    disableAnimation,
    disableRounding
}: IImage): JSX.Element {

    const [isLoading, setIsLoading] = useState<boolean>(true)

    const baseImgStyles = {
        display: (disableLoadingSpinner || disableAnimation) ? undefined : isLoading ? "none" : "block",
        animation: !disableAnimation ? "fadein 0.25s" : undefined,
    }


    const imgStyles = imgStyle ? {
        ...imgStyle,
        ...baseImgStyles
    } : baseImgStyles

    return (
        <div
            style={style ?? undefined}
            className={`flex items-center bg-[var(--backgroundColor2)] overflow-hidden ${disableRounding ? "" : "rounded-lg"} justify-center ${className ?? ""}`} >
            <img
                style={imgStyles}
                src={src ?? ""}
                alt={alt ?? undefined}
                className={`w-full h-full ${disableRounding ? "" : "rounded-lg"} ${imgClassName ?? ""}`}

                onLoad={() => setIsLoading(false)}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "/media/placeholder/no_img.png";
                }}

            />
            {
                isLoading && !disableLoadingSpinner && (<LoadingSpinner />)
            }
        </div>

    )

}