import { useRef, useState } from "react";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import { FaChevronLeft } from "react-icons/fa6";

interface IBasePopupView {
    children: JSX.Element | JSX.Element[],
    id?: number | null,
    onClose?: Function | null,
    title: string | null
}

const BasePopupView = ({ children, id, onClose, title }: IBasePopupView) => {
    const { removeModal } = useGlobalContext()
    const [animation, setAnimation] = useState("0.33s cubic-bezier(1,-0.01, 0, 0.97) 0s 1 normal none running popUp")
    let timeoutIds = useRef<NodeJS.Timeout[]>([]);

    const clearTimeouts = () => {
        timeoutIds.current.forEach((timeoutId) => clearTimeout(timeoutId));
        timeoutIds.current = [];
    };

    const close = () => {
        clearTimeouts()
        setAnimation("0.33s cubic-bezier(1,-0.01, 0, 0.97) 0s 1 normal none running popDown")
        timeoutIds.current.push(
            setTimeout(() => {
                setAnimation("0.33s cubic-bezier(1,-0.01, 0, 0.97) 0s 1 normal none running popUp")
                if (typeof onClose === 'function') {
                    onClose()
                }

                removeModal(id)
            }, 320)
        )


    }


    return (

        <div
            style={{ animation: animation, zIndex: id == 1 ? 40 : 50 }}
            className="!bg-[var(--backgroundColor1)] flex flex-col gap-4 h-full paper w-full absolute p-4">
            <div className="verticalContainer w-full select-none cursor-pointer">
                <div onClick={close} className="flex flex-row w-full gap-1 items-center">
                    <FaChevronLeft color={"var(--textColor)"} size={40} />
                    {
                        title && (<h1 className="!text-2xl !text-[var(--textColorLight)]">{title}</h1>)
                    }
                </div>

            </div>

            <div className="verticalContainer gap-4 w-full overflow-y-auto h-full">
                {
                    children
                }
            </div>


        </div>


    )

}

export default BasePopupView