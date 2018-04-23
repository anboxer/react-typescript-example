import * as ReactIntl from "react-intl";
import * as localData from "react-intl/locale-data/zh";
import { merge } from "lodash"

import { message } from "./message"


const locale: ReactIntl.Locale = merge(localData[0], {
    locale: "zh_CN",
    fields: {
        ...message
    }
})

ReactIntl.addLocaleData([locale])
export default locale