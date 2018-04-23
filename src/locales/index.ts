import * as ReactIntl from "react-intl";

import zh from "./zh_CN"

export interface KeyMap {
    [key: string]: string
}

export function getLocale(lang: string) {
    let message: ReactIntl.Locale = {
        locale: "",
        fields: {}
    }
    switch (lang) {
        case "zh_CN":
            message = zh
            break;
        default:
            message = zh
            break;
    }

    return message.fields
}

