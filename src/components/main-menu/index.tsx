import * as React from "react"
import { Menu } from 'antd';
import { Link } from "react-router-dom"
import { FormattedMessage } from "react-intl";

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
                <Menu.Item key="1">
                    <Link to="/analysis" >
                        <FormattedMessage id="global.analysis" />
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/dashboard" >
                        <FormattedMessage id="global.dashboard" />
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/settings" >
                        <FormattedMessage id="global.settings" />
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }
}