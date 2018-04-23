import * as React from "react"
import { Layout, Row, Col } from "antd"

import "antd/lib/layout/style"
import "antd/lib/row/style"
import "antd/lib/col/style"

import { injectIntlDecorator } from "../base";
import { ProfileMenu } from "../profile-menu";
import { MainMenu } from "../main-menu"
import styles from "./style.less"

const { Header, Content } = Layout

@injectIntlDecorator()
export class MainLayout extends React.PureComponent {
    public render() {
        const { children } = this.props

        return (
            <Layout>
                <Header>
                    <Row>
                        <Col span={18}>
                            <MainMenu />
                        </Col>
                        <Col span={6}>
                            <ProfileMenu className={styles.profileMenu} />
                        </Col>
                    </Row>
                </Header>
                <Content>{children}</Content>
            </Layout>
        );
    }
}