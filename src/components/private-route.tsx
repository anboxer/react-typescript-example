import * as React from "react";
import { connect } from "react-redux";
import { Route, RouteProps } from "react-router";
import { Redirect } from "react-router-dom";

interface IPrivateRouteProps extends RouteProps {
    isAuthenticated?: boolean;
}

function mapStateToProps(state: IRootState): IPrivateRouteProps {
    const info = state.authInfo;
    return {
        isAuthenticated: info.isAuthenticated,
    };
}

@connect(mapStateToProps)
export class PrivateRoute extends React.PureComponent<IPrivateRouteProps> {
    public render() {
        const { props } = this;
        const { isAuthenticated } = props;
        const to = {
            pathname: "/login",
            state: { from: props.location },
        };

        return (
            isAuthenticated
                ? <Route {...props} />
                : (
                    <Redirect to={to} />
                )
        ) as React.ReactNode;
    }

}
