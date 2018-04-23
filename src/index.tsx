import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { IntlProvider } from "react-intl";
import { ConnectedRouter } from "react-router-redux";
import { PersistGate } from 'redux-persist/integration/react'

import "./index.less";

import { PrivateRoute } from "./components/private-route";
import {
    LoginRoute,
    MainRoute,
    NotFound
} from "./routes"


import { history, store, persister } from "./store";

import { getLocale } from "./locales";

ReactDom.render(
    <IntlProvider locale="zh_CN" messages={getLocale("zh_CN")}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persister}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/login" exact component={LoginRoute} />
                        <PrivateRoute path="/" exact component={MainRoute} />
                        <Route component={NotFound} />
                    </Switch>
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    </IntlProvider>,
    document.getElementById("app")
);