import { Action } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';

import * as api from "../api/auth"
import * as actions from "../actions"
import { AUTH } from "../constants"

export interface IUser {
    id?: string;
    userName: string;
    password?: string;
}

function* login(action: Action<IUser>) {
    try {
        const user: ResponseResult = yield call(api.login, action.payload);

        if (user.status) {
            yield put(actions.authSuccess(user.data));
        } else {
            yield put(actions.authFail());
        }

    } catch (e) {
        yield put(actions.authFail());
    }
}


export function* authSaga() {
    yield takeLatest(AUTH.login, login)
}
