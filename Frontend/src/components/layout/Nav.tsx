import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import { FaBars } from "react-icons/fa6";
import { CONSTANTS } from "../../util/constants";
import Button, { BUTTON_TYPES } from "../input/Button";
import BaseSideMenu from "../general/BaseSideMenu";
import { NAV_ITEMS } from "../../navigation/navigation";
import INavItem from "../../navigation/INavItem";
import { MdPerson } from "react-icons/md";

export default function Nav() {

    const { isMobile, setModal, selectedNavItem, setSelectedNavItem } = useGlobalContext()


    function handleClickBars() {
        setModal((
            <NavMenu />
        ))
    }

    if (isMobile) {
        return (
            <nav className="flex flex-row gap-4 px-4 py-4 shadow-md z-30 bg-[var(--backgroundColor2)] absolute justify-between items-center w-full">
                <div className="horizontalContainer">
                    <button
                        onClick={handleClickBars}

                    >
                        <FaBars size={CONSTANTS.sizes.icon.lg} color="var(--textColor)" />

                    </button>

                </div>

                <Link className="text-4xl italic text-[var(--textColor)]" to='/'>
                    Gist

                </Link>



            </nav>
        )
    } else {
        return (
            <nav className="verticalContainer !items-start">
                <Link className="p-6 text-5xl font-bold italic text-[var(--textColor)]" to='/'>
                    Gist

                </Link>


                <div className="verticalContainer justify-between h-full pb-2">
                    <div className="verticalContainer !items-start !gap-4 p-2 h-full">
                        {
                            NAV_ITEMS.map((item: INavItem, i: number) => (
                                <Link to={item.path} key={i}>
                                    <Button
                                        onClick={() => setSelectedNavItem(item)}
                                        className={`!gap-4 !pr-16 hover:bg-[var(--backgroundColor5)] ${selectedNavItem === item ? "brightness-100" : 'brightness-50'}`}
                                        type={BUTTON_TYPES.transparent}
                                        text={item.text}
                                        icon={item.icon}
                                    />
                                </Link>
                            ))
                        }


                    </div>


                    <Link className="self-end" to={'/app/account'}>
                        <Button
                            className={`!gap-4 !pr-16 hover:bg-[var(--backgroundColor5)] brightness-50`}
                            type={BUTTON_TYPES.transparent}
                            text={"John Doe"}
                            icon={MdPerson}
                        />
                    </Link>

                </div>


            </nav>
        )
    }
}


function NavMenu(): JSX.Element {
    const { removeModal, setSelectedNavItem } = useGlobalContext()
    const navigate = useNavigate()

    function handleClickHome() {
        navigate('/')
        removeModal()
    }

    const titleElement = (
        <Button
            onClick={handleClickHome}
            text={"Gist"}
            type={BUTTON_TYPES.none}
            className=" px-2 text-4xl italic !text-[var(--textColor)]"
            textColor={"textColor"}

        />
    )


    return (
        <BaseSideMenu
            titleElement={titleElement}
        >

            <div className="relative h-full w-full verticalContainer">
                <div className="verticalContainer h-full w-full overflow-x-auto !items-start p-4">
                    {
                        NAV_ITEMS.map((item: INavItem, i: number) => (
                            <Link to={item.path} className="w-full" key={i}>
                                <Button
                                    onClick={() => {
                                        navigate(item.path)
                                        setSelectedNavItem(item)
                                        removeModal()

                                    }}
                                    className={`!gap-4 !justify-start !pr-16 hover:bg-[var(--backgroundColor5)]`}
                                    type={BUTTON_TYPES.normal}
                                    text={item.text}
                                    fullWidth={true}
                                    icon={item.icon}
                                    color={"paperColor"}
                                />
                            </Link>
                        ))
                    }

                </div>

            </div>
        </BaseSideMenu>
    )
}