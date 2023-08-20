import webpack from 'webpack';
import buildConfig, {BuildPaths} from './config/build'
import path from 'path';

const mode = 'development';
const isDev = mode === 'development';
const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}
const config: webpack.Configuration = buildConfig({mode: 'development', paths, isDev });
export default config;