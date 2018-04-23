import { IUser } from './../sagas/auth';
import { createAction } from "redux-actions";
import { AUTH } from "../constants";

export const authLogin = createAction<IUser>(AUTH.login);
export const authFail = createAction(AUTH.loginFail);
export const authSuccess = createAction<IUser>(AUTH.loginSuccess);
export const authLogout = createAction(AUTH.logout);
