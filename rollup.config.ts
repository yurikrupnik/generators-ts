import path from "path";
import copy from "rollup-plugin-copy";
import esBuild from "rollup-plugin-esbuild";

const cwd = process.cwd();

const globals = {
    react: "React",
    "prop-types": "PropTypes",
};

const defaultModule = {
    input: "src/app/index.ts",
    output: [
        {
            dir: "generators/app",
            format: "cjs",
            globals,
        },
    ],
    plugins: [
        esBuild({}),
        copy({
            targets: [
                {
                    src: "src/app/templates",
                    dest: "generators/app/",
                },
            ],
        }),
        // copy({
        //     // targets: [{ src: path.join(cwd, "package.json"), dest: "generators" }],
        //     targets: [{ src: path.join(cwd, "package.json"), dest: "generators" }],
        // }),
    ],
};

export default defaultModule;
