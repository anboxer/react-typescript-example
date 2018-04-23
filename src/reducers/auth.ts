import { Action, handleActions } from "redux-actions";

import { AUTH } from "../constants";


const initState: IAuthInfo = { isAuthenticated: false };

export const authInfo = handleActions<IAuthInfo, IAuthInfo>({
    [AUTH.login]: (state: IAuthInfo, action: Action<IAuthInfo>) => {
        return { ...state, ...action.payload, isAuthenticated: true };
    },
}, initState);
