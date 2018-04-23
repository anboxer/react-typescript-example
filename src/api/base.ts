import { merge } from 'lodash';



const apiPrefix: string = "/api/"


function handleResponse(res: Response): Promise<ResponseResult> {
    console.log(res)
    return res.json()
}

export class API {
    static getUrl(url: string): string {
        return `${apiPrefix}${url}`
    }
    static get(url: string): Promise<ResponseResult> {
        return fetch(API.getUrl(url))
            .then(response => handleResponse(response))
    }
    static post(url: string, data?: any, options?: RequestInit): Promise<ResponseResult> {
        let opt: RequestInit = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        }
        if (data) {
            opt.body = JSON.stringify(data)
        }
        if (options) {
            opt = merge(opt, options)
        }
        return fetch(API.getUrl(url), opt)
            .then(response => handleResponse(response))
    }

}