import { MdExplore, MdSettings, MdStar } from "react-icons/md";
import INavItem from "./INavItem";

export const NAV_ITEMS: INavItem[] = [
    {
        text: "Explore",
        path: "/",
        icon: MdExplore
    },
    {
        text: "Saved",
        path: "/app/saved",
        icon: MdStar
    },
    {
        text: "Settings",
        path: "/app/account/settings",
        icon: MdSettings
    },

]