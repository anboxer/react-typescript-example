import { Form } from "antd"
import { curryRight } from "lodash"
import * as ReactIntl from "react-intl";

import { InjectedIntl } from "react-intl"
import { WrappedFormUtils } from "antd/lib/form/Form"

/**
 * 
 */
export declare interface IntlComponentProps {
    intl?: InjectedIntl;
}
/**
 * 
 */
export declare interface AntdFormProps {
    form?: WrappedFormUtils
}

export const injectIntlDecorator = curryRight<any, any>(ReactIntl.injectIntl)
export const formDecorator = curryRight<any, any>(Form.create())

