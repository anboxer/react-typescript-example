import * as React from "react"
import { Spin, Icon } from 'antd';
import "antd/lib/spin/style"
import "antd/lib/icon/style"

import styles from "./style.less"

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export class BaseLoading extends React.PureComponent {
    public render() {
        return <div className={styles.loading}>
            <Spin indicator={antIcon} />
        </div>
    }
}