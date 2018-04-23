import * as merge from "webpack-merge"
import * as webpack from "webpack"
import * as path from "path"

import { commonConfig } from "./webpack.common"


const devConfig: webpack.Configuration = {
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"),
        compress: true,
        port: 9000,
        hot: true,
        open: true,
        proxy: {
            "/api": {
                target: "http://localhost:8008",
                pathRewrite: { "^/api": "" }
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

export default merge(commonConfig, devConfig)