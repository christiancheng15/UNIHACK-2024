import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import { FaBars, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { CONSTANTS } from "../../util/constants";
import Button, { BUTTON_TYPES } from "../input/Button";
import BaseSideMenu from "../general/BaseSideMenu";
import { Logo } from "../../assets";
import Image from "../general/Image";
import { NAV_ITEMS } from "../../navigation/navigation";
import INavItem from "../../navigation/INavItem";
import { MdPerson } from "react-icons/md";
//import { useAPIContext } from "../../contexts/useAPIContext";


export default function Nav() {
    //const api = useAPIContext()

    const { isMobile, setModal, removeModal, selectedNavItem, setSelectedNavItem } = useGlobalContext()


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

                <Link to='/'>
                    <Image
                        className="h-8 !bg-transparent"
                        src={Logo}
                        disableLoadingSpinner={true}
                        disableAnimation={true}
                    />
                </Link>



            </nav>
        )
    } else {
        return (
            <nav className="verticalContainer !items-start">
                <Link className="p-6 text-5xl italic text-[var(--textColor)]" to='/'>
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
    const { isLoggedIn, removeModal } = useGlobalContext()
    const navigate = useNavigate()

    function handleClickHome() {
        navigate('/')
        removeModal()
    }

    const titleElement = (
        <Button
            onClick={handleClickHome}
            element={
                <Image
                    className="h-8 !bg-transparent"
                    //src={Logo}
                    disableLoadingSpinner={true}
                    disableAnimation={true}
                />
            }
            type={BUTTON_TYPES.none}


        />
    )

    function handleClickRead() {
        navigate('/app/read')
        removeModal()
    }

    return (
        <BaseSideMenu
            titleElement={titleElement}
        >

            <div className="relative h-full w-full verticalContainer">
                <div className="verticalContainer h-full w-full overflow-x-auto !items-start p-4">

                    <button
                        onClick={handleClickRead}
                        className="pNavButton">
                        Contact
                    </button>

                </div>

                <div className="horizontalContainer w-full justify-center !gap-8 px-2 pb-2">
                    <FaFacebook size={CONSTANTS.sizes.icon.xl} /><FaInstagram size={CONSTANTS.sizes.icon.xl} /><FaYoutube size={CONSTANTS.sizes.icon.xl} />
                </div>

            </div>
        </BaseSideMenu>
    )
}