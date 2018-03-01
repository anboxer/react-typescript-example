import * as Webpack from "webpack"
import * as HTMLWebpackPlugin from "html-webpack-plugin"
import * as path from "path"

const config: Webpack.Configuration = {
    entry: {
        index: "./src/index.tsx"
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        port: 8008,
        hot: true,
        compress: true,
        stats: "errors-only",
        disableHostCheck: true,
        noInfo: false
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ["vendor", "index"]
        })
    ]
}

export default config