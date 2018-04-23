import * as React from "react";
import { connect, Dispatch } from "react-redux"
import { RouteComponentProps } from "react-router"

import { Main } from "../../components/main"

function mapStateToProps(state: IRootState, ownProps: MainContainerProps): MainContainerProps {

    const { authInfo } = state
    return {
        ...ownProps,
        isAuthenticated: authInfo.isAuthenticated
    }
}
function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: MainContainerProps): MainContainerProps {

    return {
        ...ownProps
    }
}
export interface MainContainerProps extends RouteComponentProps<any> {
    isAuthenticated: boolean;
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MainContainer extends React.PureComponent<MainContainerProps> {
    public render() {

        return (<Main />) as React.ReactNode
    }
}