import * as React from "react"
import { Menu } from 'antd';

import { injectIntlDecorator } from "../base";

@injectIntlDecorator()
export class MainMenu extends React.PureComponent {
    public render() {
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
            >

            </Menu>
        )
    }
}