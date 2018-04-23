import { Menu, Dropdown, Icon } from 'antd';
import * as React from "react";

import "antd/lib/menu/style"
import "antd/lib/dropdown/style"
import "antd/lib/icon/style"

import { FormattedMessage } from "react-intl";

import {
    injectIntlDecorator,
    IntlComponentProps
} from "../base";

interface ProfileMenuProps extends IntlComponentProps {
    className?: string
}

@injectIntlDecorator()
export class ProfileMenu extends React.PureComponent<ProfileMenuProps> {
    public render() {
        const { className } = this.props
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a href="http://">
                        <FormattedMessage
                            id="auth.logout" />
                    </a>
                </Menu.Item>
            </Menu>
        );

        return (
            <Dropdown overlay={menu} trigger={['click']}>
                <a className={className}>
                    <Icon type="user" />
                    <Icon type="down" />
                </a>
            </Dropdown>
        )
    }
}