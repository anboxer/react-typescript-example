import { combineReducers } from "redux";

import { authInfo } from "./auth";


export default combineReducers<IRootState>({
    authInfo
});
