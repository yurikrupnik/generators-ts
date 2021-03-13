import Base, { GeneratorOptions } from "yeoman-generator";

// const Webpack = require("../webpack/app");
// const Base = require('yeoman-generator');
// var webpack = require('../webpack/app');
// var G = require('generator-webpack-mussia');

// var reduce = require('lodash.reduce');
// const utils = require('./utils');
// const questions = require('./questions');
class ReactGenerator extends Base {
    constructor(args: any, opts: GeneratorOptions) {
        super(args, opts);
        // console.log("args", args);
        // console.log("opts", opts);

        this.argument("appname", {
            type: String,
            required: true,
        });
        // this.

        this.option("css", {
            type: Boolean,
            // required: true,
            description: "Include css files",
            default: true,
        });
        // console.log("appname.", this.options);
        // console.log("appname.", this.options.appname);
        // console.log("css", this.options.css);
        // console.log("this.", this.option);
        //
        this.option("sass", {
            type: Boolean, // todo check that
            // required: Boolean,
            description: "Include sass files",
            default: false,
        });
    }

    writing(): void {
        this.fs.copyTpl(
            this.templatePath(),
            this.destinationPath(this.options.appname),
            this.options
        );
        this.fs.copyTpl(
            this.templatePath("File.tsx"),
            this.destinationPath(`${this.options.appname}/${this.options.appname}.tsx`),
            this.options
        );
    }

    end(): void {
        this.log(`You have finished building ${ReactGenerator.name}.`);
    }
}

export default ReactGenerator;
