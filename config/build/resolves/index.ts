import {ResolveOptions} from "webpack";

export function resolves(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js']
    }
}