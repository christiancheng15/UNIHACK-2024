interface IGlobalStyles {
    light: any,
    dark: any
}

export enum ColorModes {
    light = "light",
    dark = "dark"
}

export const GLOBAL_STYLES: IGlobalStyles = {
    light: {
        "primaryColor": "#4f46e5",
        "primaryColorVeryLight": "#818cf8",
        "primaryColorLight": "#6366f1",
        "primaryColorDark": "#4338ca",
        "backgroundColor0": "#fff",
        "backgroundColor1": "#f5f5f5",
        "backgroundColor2": "#e8e8e8",
        "backgroundColor3": "#d9d9d9",
        "backgroundColor4": "#e9e9e9",
        "backgroundColor5": "#909090",
        "backgroundColor8": "#757575",
        "textColorLight": "#656464",
        "textColorLight2": "#707070",
        "textColor": "#000",
        "textColorInverted": "#fff",
        "paperColor": "#f5f5f5",
        "white": "#fff",
        "secondaryColorVeryLight": "#fff0cb",
        "secondaryColor": "#000",
        "secondaryColorDark2": "#eba800",
        "secondaryColorDark": "#111",
        "altColor": "#3b82f6",
        "successColor": "#43a047",
        "onlineColor": "#00ec00",
        "errorColor": "#ff3030",
        "warningColor": "#ca8a04"

    },
    dark: {
        "primaryColor": "#9e94ff",
        "primaryColorVeryLight": "#c4c9ff",
        "primaryColorLight": "#a1a4ff",
        "primaryColorDark": "#7460ca",
        "backgroundColor0": "#121212",
        "backgroundColor1": "#1e1e1e",
        "backgroundColor2": "#272727",
        "backgroundColor3": "#2e2e2e",
        "backgroundColor4": "#333",
        "backgroundColor5": "#404040",
        "backgroundColor8": "#4d4d4d",
        "textColorLight": "#dfdfdf",
        "textColorLight2": "#858585",
        "textColor": "#fff",
        "textColorInverted": "#000",
        "paperColor": "#333",
        "white": "#121212",
        "secondaryColorVeryLight": "#4f4f4f",
        "secondaryColor": "#fff",
        "secondaryColorDark2": "#c99000",
        "secondaryColorDark": "#eee",
        "altColor": "#64a1ff",
        "successColor": "#4caf50",
        "onlineColor": "#00cc00",
        "errorColor": "#ff5555",
        "warningColor": "#facc15"

    }
}