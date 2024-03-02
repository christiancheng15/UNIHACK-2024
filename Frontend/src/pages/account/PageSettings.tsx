import { MdLogout, MdSave } from "react-icons/md";
import Button, { BUTTON_TYPES } from "../../components/input/Button";
import { validCategories } from "../../util/constants";
import TemplatePage from "../template/TemplatePage";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import { ColorModes } from "../../util/styles";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

export default function PageSettings() {
    const { toggleColorMode, colorMode } = useGlobalContext() as { colorMode: ColorModes, toggleColorMode: () => void }

    return (
        <TemplatePage
            title={"Settings"}
        >
            <div className="verticalContainer w-full !gap-8">

                <div className="container2 verticalContainer !items-start w-full">
                    <h2>Topic Preferences</h2>
                    <div className="verticalContainer">
                        {
                            validCategories.map((category: any, i: number) => (
                                <div className="iconText self-start">
                                    <input type="checkbox" key={i} name={category.id} id={category.id} />
                                    <label htmlFor={category.id}>{category.text}</label>
                                </div>

                            ))
                        }
                    </div>
                    <Button
                        className={"w-full mt-4"}
                        text={"Save"}
                        icon={MdSave}
                        type={BUTTON_TYPES.normal}
                        color={"primaryColor"}
                    />
                </div>


                <div className="container2 verticalContainer !items-start w-full">
                    <h2>Appearance</h2>
                    <Button
                        onClick={toggleColorMode}
                        className={"w-full mt-4"}
                        text={"Change color theme"}
                        icon={colorMode === ColorModes.light ? RiSunFill : RiMoonClearFill}
                        type={BUTTON_TYPES.normal}
                        color={"primaryColor"}
                    />
                </div>


                <div className="container2 verticalContainer !items-start w-full">
                    <h2>Actions</h2>
                    <Button
                        className={"w-full mt-4"}
                        text={"Logout"}
                        icon={MdLogout}
                        type={BUTTON_TYPES.normal}
                        color={"primaryColor"}
                    />
                </div>

            </div>


        </TemplatePage>
    )
}

