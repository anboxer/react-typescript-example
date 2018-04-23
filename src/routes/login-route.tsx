import * as ReactLoadable from "react-loadable"

import RouteLoading from "./route-loading"

export const LoginRoute = ReactLoadable({
    loader: () => import("../containers/login"),
    loading: RouteLoading,
    delay: 100
});