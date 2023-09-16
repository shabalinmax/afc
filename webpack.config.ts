import webpack from 'webpack';
import buildConfig, {BuildPaths} from './config/build'
import path from 'path';
import {BuildEnv} from "./config/build/types/config";


export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const PORT = env.PORT || 3000;
    const isDev = mode === 'development';
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
    const config: webpack.Configuration = buildConfig({mode: mode, paths, isDev, PORT });
    return config
};