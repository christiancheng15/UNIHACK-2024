import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import Button, { BUTTON_TYPES } from "./Button";
import { ColorModes, GLOBAL_STYLES } from "../../util/styles";

interface IToggleColorModeButton {
    iconSize?: number | null,
    className?: string | null
}

export default function ToggleColorModeButton({ iconSize, className }: IToggleColorModeButton) {
    const { toggleColorMode, colorMode } = useGlobalContext() as { colorMode: ColorModes, toggleColorMode: () => void }

    return (
        <Button
            icon={colorMode === ColorModes.light ? RiSunFill : RiMoonClearFill}
            onClick={toggleColorMode}
            iconSize={iconSize}
            type={BUTTON_TYPES.none}
            className={`!py-0 ${className ?? ""}`}
            //textColor="primaryColor"
            textHexColor={colorMode === ColorModes.light ? GLOBAL_STYLES[colorMode].primaryColor : "#fde047"}
        />
    )
}