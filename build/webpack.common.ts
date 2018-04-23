import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as WebPack from "webpack";
import * as autoprefixer from "autoprefixer";

import * as path from "path";

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


const { env } = process
const isProd = env.NODE_ENV === "prod"


export const commonConfig: WebPack.Configuration = {
  entry: { index: "./src/index.tsx" },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist")
  },
  resolve: {
    // add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
              sourceMap: !isProd,
              localIdentName: "_[hash:base64:6]_",
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              indent: "postcss",
              sourceMap: !isProd,
              plugins: () => [
                require("postcss-flexbugs-fixes"),
                autoprefixer({
                  browsers: [">1%", "last 4 versions", "not ie < 9"]
                })
              ]
            }
          },
          { loader: "less-loader", options: { sourceMap: !isProd, javascriptEnabled: true } }
        ]
      },
      {
        test: /\.less$/,
        include: [/node_modules/],
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: { module: false }
          },
          { loader: "less-loader", options: { javascriptEnabled: true } }
        ]
      },
      {
        test: /\.css$/,
        include: [/assets/],
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: { module: false }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: [/assets/],
        use: [
          {
            loader: "url-loader"
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[ext]", outputPath: "style/font/" }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{ loader: "file-loader", options: {} }]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: true,
    minimize: true,
    minimizer: [],
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new FaviconsWebpackPlugin({
      // Your source logo
      logo: './src/assets/logo-black.png',
      // The prefix for all image files (might be a folder or a name)
      prefix: 'icons-[hash]/',
      // Emit all stats of the generated icons
      emitStats: false,
      // The name of the json containing all favicon information
      statsFilename: 'iconstats-[hash].json',
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      persistentCache: true,
      // Inject the html into the html-webpack-plugin
      inject: true,
      // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
      background: '#fff',
      // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
      title: 'Webpack App',

      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    })
  ]
};

export default commonConfig;
