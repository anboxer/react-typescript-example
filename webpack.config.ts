import * as dev from "./build/webpack.dev";
import * as prod from "./build/webpack.prod";

const { env } = process
let config = dev
if (env.NODE_ENV === "prod") {
    config = prod
}

export default config;