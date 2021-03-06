import Base, { GeneratorOptions } from "yeoman-generator";
// var Webpack = require('../webpack/app');
// const Base = require('yeoman-generator');
// var webpack = require('../webpack/app');
// var G = require('generator-webpack-mussia');

// var reduce = require('lodash.reduce');
// const utils = require('./utils');
// const questions = require('./questions');
class ReactGenerator extends Base {
    constructor(args: any, opts: GeneratorOptions) {
        super(args, opts);
        // console.log('args', args);
        // console.log('opts', opts);

        // this.argument('appname', {
        //     type: String,
        //     required: true
        // });
        // this.

        this.option("css", {
            type: Boolean,
            // required: false,

            // desc: 'Include css files',
            default: true,
        });

        this.option("sass", {
            type: Boolean, // todo check that
            // required: Boolean,
            // desc: 'Include sass files',
            default: false,
        });

        this.option("ssr", {
            type: Boolean,
            // required: Boolean,
            // desc: 'Include server side rendering',
            default: false,
        });
    }

    // configuring(): void {
    //     this.config.set({
    //         extentions: ".jsx",
    //         sos: "yes",
    //     });
    // }

    writing(): void {
        // this.fs.extendJSON(this.destinationPath('package.json'), this._getDefaultPackage());
        this.fs.extendJSON(this.destinationPath("package.json"), {
            name: "came-from-react",
        });
        this.fs.copyTpl(this.templatePath(), this.destinationPath("src"), this.options);
    }

    // _installPackages(): void {
    //     // this.addDependencies({ react: "*" });
    //     // this.npmInstall(["react", "prop-types",
    //     // "react-dom", "react-router", "react-router-dom"]);
    // }

    // _installDevPackages(): void {
    //     // this.npmInstall(
    //     //     [
    //     //         "@babel/preset-react",
    //     //         "eslint-plugin-jsx-a11y",
    //     //         "eslint-plugin-react",
    //     //         "react-testing-library",
    //     //     ],
    //     //     { "save-dev": true }
    //     // );
    // }

    // install(): void {
    //     // this._installPackages();
    //     // this._installDevPackages();
    // }

    conflicts(): void {
        // todo test
        const json = this.fs.readJSON(this.destinationPath("package.json"));
        if (json) {
            // this.fs.extendJSON(this.destinationPath('package.json'), {
            //     name: 'plo'
            // });
        } else {
            this.fs.extendJSON(this.destinationPath("package.json"), {
                name: "as",
                version: "0.0.0",
                engines: { node: ">=6" },
                scripts: {},
                main: "index.ksx",
                dependencies: {},
                devDependencies: {},
            });
        }
        const lint = this.fs.readJSON(this.destinationPath(".eslintrc"));
        const babel = this.fs.readJSON(this.destinationPath(".babelrc"));
        if (lint) {
            this.fs.extendJSON(this.destinationPath(".eslintrc"), {
                rules: {
                    "react/jsx-indent": [2, 4], // personal
                    "react/jsx-indent-props": 0, // personal
                    "jsx-a11y/anchor-is-valid": [
                        "error",
                        {
                            components: ["Link"],
                            specialLink: ["to"],
                            aspects: ["noHref", "invalidHref", "preferButton"],
                        },
                    ],
                },
                extends: ["airbnb"], // overwrites arrays
            });
        }
        // else {
        // this.fs.extendJSON(this.destinationPath('.eslintrc'), {
        //     rules: {
        //         'react/jsx-indent': [2, 4], // personal
        //         'react/jsx-indent-props': 0, // personal
        //         'jsx-a11y/anchor-is-valid': [
        //             'error',
        //             {
        //                 components: ['Link'],
        //                 specialLink: ['to'],
        //                 aspects: ['noHref', 'invalidHref', 'preferButton']
        //             }
        //         ]
        //     },
        //     extends: ['airbnb'] // overwrites arrays
        // });
        // }

        if (babel) {
            // todo test
            // this.fs.extendJSON(this.destinationPath('.babelrc'), {
            //     presets: babel.presets.concat('@babel/preset-react'),
            //     plugins: babel.plugins.concat('react-loadable/babel')
            // });
        }
    }

    end(): void {
        this.log(`You have finished building ${ReactGenerator.name}.`);
    }
}

export default ReactGenerator;
