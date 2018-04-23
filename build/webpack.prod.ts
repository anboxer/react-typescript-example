import * as merge from "webpack-merge"
import * as webpack from "webpack"

import { commonConfig } from "./webpack.common"


const devConfig: webpack.Configuration = {
    plugins: [

    ]
}

export default merge(commonConfig, devConfig)