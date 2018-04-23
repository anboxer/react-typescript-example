import * as React from "react";
import * as ReactLoadable from "react-loadable"
import { Spin } from 'antd';
import "antd/lib/spin/style"

export default class RouteLoading extends React.PureComponent<ReactLoadable.LoadingComponentProps> {
    public render() {
        return <Spin size="large" />
    }
}