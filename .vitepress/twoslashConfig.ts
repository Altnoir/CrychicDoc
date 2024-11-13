import { cwd } from "node:process";
import { join } from "node:path";

export const compilerOptions = {
    cache: true,
    compilerOptions: {
        baseUrl: cwd(),
        target: 99,
        module: 99,
        moduleResolution: 100,
        paths: {
            "*": [join(cwd(), "typefiles/1.20.1/probe/generated/*")],
        },
        resolveJsonModule: true,
        esModuleInterop: true,
        isolatedModules: true,
        verbatimModuleSyntax: true,
        skipLibCheck: true,
        skipDefaultLibCheck: true,
    },
};