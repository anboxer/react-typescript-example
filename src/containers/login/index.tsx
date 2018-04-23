import * as React from "react";
import { connect, Dispatch } from "react-redux"
import { RouteComponentProps, Redirect } from "react-router"

import { Login } from "../../components/login"
import { store } from "../../store"
import { authLogin } from "../../actions"
import { IUser } from "../../sagas/auth";

function mapStateToProps(state: IRootState, ownProps: LoginContainerProps): LoginContainerProps {

    const { authInfo } = state
    return {
        ...ownProps,
        isAuthenticated: authInfo.isAuthenticated
    }
}
function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: LoginContainerProps): LoginContainerProps {

    return {
        ...ownProps
    }
}
export interface LoginContainerProps extends RouteComponentProps<any> {
    isAuthenticated: boolean;
}

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginContainer extends React.PureComponent<LoginContainerProps> {
    public render() {
        const { isAuthenticated } = this.props
        let component = <Login onLogin={this.login} />
        if (isAuthenticated) {
            component = <Redirect to={"/"} />
        }
        return (component) as React.ReactNode
    }
    private login?= (values: IUser) => {
        store.dispatch(authLogin(values))
    }
}