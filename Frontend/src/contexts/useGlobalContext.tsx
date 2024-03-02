import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import IError from "../models/api";
import { ColorModes, GLOBAL_STYLES } from "../util/styles";
import { NAV_ITEMS } from "../navigation/navigation";
import INavItem from "../navigation/INavItem";

const GlobalContext = createContext<any>({})

interface GlobalProviderProps {
    children: ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps) {
    const [colorMode, setColorMode] = useState<ColorModes>(window.matchMedia("(prefers-color-scheme: dark)").matches
        ? ColorModes.dark
        : ColorModes.light
    )

    const [modal0, setModal0] = useState<JSX.Element | null>(null);
    const [modal1, setModal1] = useState<JSX.Element | null>(null);
    const [modal2, setModal2] = useState<JSX.Element | null>(null);

    const [errors, setErrors] = useState<IError[]>([])

    const [isMobile, setIsMobile] = useState<boolean>(false)

    const [selectedNavItem, setSelectedNavItem] = useState<INavItem>(NAV_ITEMS[0])

    function setDocumentColorStyles() {
        const rootTheme = GLOBAL_STYLES[colorMode]

        for (const [key, value] of Object.entries(rootTheme)) {
            document.documentElement.style.setProperty(`--${key}`, value as string);
        }


    }


    const addErrors = (errs: IError | IError[]) => {
        let newErrors: IError[] = [];

        if (!Array.isArray(errs)) {
            if (typeof errs === 'string') {
                errs = [{ msg: errs }];
            } else {
                errs = [errs];
            }
        }

        for (let i = 0; i < errs.length; i++) {
            if (typeof errs[i] === 'string') {
                errs[i] = {
                    msg: errs[i] as any,
                } as IError
            }
        }

        newErrors = errs as IError[];



        setErrors(errors.length > 0 ? newErrors : [...errors, ...newErrors]);
    };

    function clearErrors() {
        setErrors([])
    }


    const handleResize = () => {
        if (window.innerWidth < 1024) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }


    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)


        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(() => {

        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) =>
                setColorMode(e.matches ? ColorModes.dark : ColorModes.light)
            );

        setColorMode(
            window.matchMedia("(prefers-color-scheme: dark)").matches
                ? ColorModes.dark
                : ColorModes.light
        );

        return () => {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeEventListener("change", () => { });
        };

    }, []);

    useEffect(() => {
        setDocumentColorStyles()
    }, [colorMode])


    function setModal(element: JSX.Element, id: number) {
        if (typeof id === 'undefined') {
            if (!modal0) {
                setModal0(element)
            } else if (!modal1) {
                setModal1(element)
            } else if (!modal2) {
                setModal2(element)
            }
        }

        if (id === 0) {
            document.body.style.overflow = "hidden"
            setModal0(element)
        } else if (id === 1) {
            document.body.style.overflow = "hidden"
            setModal1(element)
        } else if (id === 2) {
            document.body.style.overflow = "hidden"
            setModal2(element)
        }
    }

    function removeModal(id: number) {
        if (typeof id !== 'number') {
            if (modal2) {
                setModal2(null)
            } else if (modal1) {
                setModal1(null)
            } else if (modal0) {
                setModal0(null)
            }
        }

        if (id === 0) {
            document.body.style.overflow = "auto"
            setModal0(null)
        } else if (id === 1) {
            document.body.style.overflow = "auto"
            setModal1(null)
        } else if (id === 2) {
            document.body.style.overflow = "auto"
            setModal2(null)
        }
    }

    const toggleColorMode = () => {
        setColorMode((prevMode) => (prevMode == ColorModes.light ? ColorModes.dark : ColorModes.light));
    };



    const value = {
        isMobile,
        colorMode,
        toggleColorMode,
        setColorMode,

        errors,
        addErrors,
        clearErrors,

        modal0,
        modal1,
        modal2,
        setModal,
        removeModal,

        selectedNavItem,
        setSelectedNavItem
    }

    return (
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);