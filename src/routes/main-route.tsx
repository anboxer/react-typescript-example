import * as ReactLoadable from "react-loadable"

import RouteLoading from "./route-loading"

export const MainRoute = ReactLoadable({
    loader: () => import("../containers/main"),
    loading: RouteLoading,
    delay: 100
});