import { useRef, useState } from "react";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import { FaXmark } from "react-icons/fa6";

interface IBaseModal {
    children: JSX.Element | JSX.Element[],
    minWidth?: string | null,
    id?: number | null,
    onClose?: Function | null,
    title?: string | null,
    fullscreen?: boolean | null,
    className?: string | null
}

const BaseModal = ({ children, minWidth, id, onClose, title, fullscreen, className }: IBaseModal) => {
    const { removeModal, modal0 } = useGlobalContext()
    const [animation, setAnimation] = useState("fadein 0.125s ease-in-out")
    // if (document.activeElement instanceof HTMLElement) {
    //     document.activeElement.blur();
    // }
    let timeoutIds = useRef<NodeJS.Timeout[]>([]);

    const clearTimeouts = () => {
        timeoutIds.current.forEach((timeoutId) => clearTimeout(timeoutId));
        timeoutIds.current = [];
    };

    const close = (e: any, idk?: number | null): void => {
        if (e.currentTarget === e.target || idk) {
            clearTimeouts()
            setAnimation("fadeout 0.125s ease-in-out")
            timeoutIds.current.push(
                setTimeout(() => {
                    setAnimation("fadein 0.125s ease-in-out")
                    if (typeof onClose === 'function') {
                        onClose()
                    }

                    removeModal(id)
                }, 100)
            )

        }

    }


    return (
        (
            <div
                style={{ animation: animation, zIndex: id == 1 ? 40 : 50 }}
                onClick={close}
                className={`w-screen pointer-events-auto ${modal0 || fullscreen ? "h-full" : "h-full"} lg:p-4 p-4 fixed top-0 left-0 flex justify-center bg-black bg-opacity-75`}>
                <div style={{ minWidth: minWidth ?? undefined }} className={`verticalContainer overflow-y-auto lg:max-h-1/2 m-auto gap-4 paper p-8 ${className ?? ""}`}>
                    {
                        title && (
                            <div className="horizontalContainer justify-between w-full">
                                {
                                    title && (<h1 className="!text-2xl !text-[var(--textColorLight)]">{title}</h1>)
                                }
                                <button onClick={(e) => close(e, 1)} className="button !shadow-none !bg-transparent !text-[var(--textColor)]"><FaXmark size={40} /></button>
                            </div>
                        )
                    }
                    {
                        children
                    }
                </div>


            </div>
        )

    )

}

export default BaseModal