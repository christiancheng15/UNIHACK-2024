import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { MouseEventHandler } from "react";
import { CONSTANTS } from "../../util/constants";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import Nav from "../../components/layout/Nav";
//import { useAPIContext } from "../../contexts/useAPIContext";

interface ITemplatePage {
    topTitle?: string | null,
    title?: string | null,
    titleMarginBottom?: string | null,
    subtitle?: string | null,
    children: JSX.Element | JSX.Element[],
    onBack?: MouseEventHandler<HTMLDivElement> | null,
    onBackInline?: boolean | null,
    rightButton?: JSX.Element | null,
    disableWhitespace?: boolean | null,
    navDisabled?: boolean | null,
    disablePadding?: boolean | null,
    height?: string | null,
    className?: string | null,
    disableAuthRedirect?: boolean | null
}

export default function TemplatePage(
    {
        disableAuthRedirect,
        title,
        topTitle,
        height,
        titleMarginBottom,
        subtitle,
        className,
        children,
        onBack,
        onBackInline = false,
        rightButton,
        disableWhitespace = false,
        navDisabled = false,
        disablePadding = false }: ITemplatePage): JSX.Element | null {
    //const api = useAPIContext()
    const navigate = useNavigate()

    // if (!api.isLoggedIn && !disableAuthRedirect) {
    //     window.location.assign('/')
    //     return null
    // }

    const { isMobile } = useGlobalContext()

    if (!topTitle) {
        document.title = `${title} | ${CONSTANTS.appInfo.name}` ?? CONSTANTS.appInfo.name
    } else {
        document.title = `${topTitle} | ${CONSTANTS.appInfo.name}`
    }

    if (onBack === null) {

        onBack = () => navigate(-1)
    }

    return (
        <>
            <div className="w-full h-full flex-row flex">
                {
                    !navDisabled && !isMobile && (
                        <Nav />
                    )
                }
                <div id="mainPage" className={`w-full h-full overflow-y-auto ${disablePadding ? "" : "p-4"} ${className ? className : ""} flex lg:mt-0 mt-16 flex-col gap-4 relative dark:!bg-[var(--white)]`}>
                    <div style={height ? { height: height } : undefined} className={`w-full ${!disableWhitespace ? "lg:w-[50%] lg:mx-auto" : ""} flex flex-col gap-4`}>
                        {
                            title || subtitle || onBack || rightButton ? (
                                <div className='w-full flex flex-row justify-between items-center text-[var(--primaryColor)]'>
                                    <div style={titleMarginBottom ? { marginBottom: titleMarginBottom } : undefined} className="flex flex-col gap-2 w-full">
                                        {
                                            onBackInline ? (
                                                <div onClick={onBack} className="flex flex-row w-full gap-1 items-center text-black mb-2">
                                                    <MdChevronLeft size={CONSTANTS.sizes.icon.xl} />
                                                    {
                                                        title && (<h1>{title}</h1>)
                                                    }
                                                </div>
                                            ) : (
                                                <>
                                                    {
                                                        onBack && (
                                                            <div onClick={onBack} className="flex flex-row items-center text-black">
                                                                <MdChevronLeft size={40} />
                                                                Back
                                                            </div>
                                                        )
                                                    }



                                                    {
                                                        subtitle && (<h2 className="text-[var(--textColorLight)] !font-normal">{subtitle}</h2>)
                                                    }
                                                    <div className="w-full flex flex-row justify-between items-center">
                                                        <h1>{title}</h1>
                                                        {rightButton}
                                                    </div>
                                                </>
                                            )
                                        }



                                    </div>


                                </div>
                            ) : (undefined)
                        }


                        {
                            children
                        }
                    </div>

                </div>
                {
                    !navDisabled && isMobile && (
                        <Nav />
                    )
                }
            </div>


        </>

    )
}