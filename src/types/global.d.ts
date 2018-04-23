/**
 * declare less\css as module
 */
declare module "*.less";
declare module "*.css";

/**
 * Base component props
 */

declare interface IBaseComponentProps {
    className?: string
}

/**
 * auth information
 */
declare interface IAuthInfo {
    isAuthenticated: boolean;
}

/**
 * RootStore
 */

declare interface IRootState {
    authInfo: IAuthInfo;
}

/**
 * 
 */
declare interface ResponseResult {
    status: boolean;
    data: any;
}