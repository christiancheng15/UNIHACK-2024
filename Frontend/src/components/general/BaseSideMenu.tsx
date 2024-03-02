import { useRef, useState } from "react";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import { FaChevronLeft } from "react-icons/fa6";

interface IBaseSideMenu {
    children: JSX.Element | JSX.Element[],
    id?: number | null,
    onClose?: Function | null,
    titleElement?: JSX.Element | null
}

const BaseSideMenu = ({ children, id, onClose, titleElement }: IBaseSideMenu) => {
    const { removeModal } = useGlobalContext()
    const [animation, setAnimation] = useState("0.33s cubic-bezier(1,-0.01, 0, 0.97) 0s 1 normal none running popRight")
    let timeoutIds = useRef<NodeJS.Timeout[]>([]);

    const clearTimeouts = () => {
        timeoutIds.current.forEach((timeoutId) => clearTimeout(timeoutId));
        timeoutIds.current = [];
    };

    const close = () => {
        clearTimeouts()
        setAnimation("0.33s cubic-bezier(1,-0.01, 0, 0.97) 0s 1 normal none running popLeft")
        timeoutIds.current.push(
            setTimeout(() => {
                setAnimation("0.33s cubic-bezier(1,-0.01, 0, 0.97) 0s 1 normal none running popRight")
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
            className="fixed h-full w-full bg-[var(--backgroundColor2)] top-0 left-0 right-0">
            <div className="horizontalContainer justify-between w-full px-4 py-4">
                {titleElement}
                <button
                    onClick={close}
                    className="button !shadow-none !bg-transparent !text-[var(--textColor)]"
                >
                    <FaChevronLeft size={30} />
                </button>
            </div>
            <div className="verticalContainer gap-4 w-full overflow-y-auto h-full">
                {
                    children
                }
            </div>


        </div>


    )

}

export default BaseSideMenu