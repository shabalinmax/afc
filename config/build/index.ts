import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {plugins} from "./plugins";
import {loaders} from "./loaders";
import {resolves} from "./resolves";
import {buildDevServer} from "./buildDevServer";
export {BuildPaths, BuildOptions} from './types/config'
export default function webpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: plugins(paths),
        module: {
            rules: loaders(options),
        },
        resolve: resolves(),
        devtool: mode === 'development' ? 'inline-source-map' : undefined,
        devServer: mode === 'development' ? buildDevServer(options) : undefined,
    }
}