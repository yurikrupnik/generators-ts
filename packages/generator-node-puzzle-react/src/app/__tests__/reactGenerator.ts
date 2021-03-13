import path from "path";
// import assert from 'yeoman-assert';
import helpers from "yeoman-test";

// const fs = require("fs-extra");
// const util = require('util');
// const fs = require('fs');
// const fs = require('fs-extra');
// describe('generator test', () => {
//     describe('test', () => {
//         let runResult;
//         beforeEach(async () => {
//             runResult = await helpers
//                 .create(                   // instantiates RunContext
//                     'namespace',             // namespace or generator
//                     {},                      // test options
//                     {}                       // environment options
//                 )
//             //     [.cd(dir)]                  // runs the test inside a non temporary dir
//             // [.doInDir(dir => {})        // prepares the test dir
//             // [.withLookups({})]          // runs Environment lookups
//             // [.withOptions({})]          // passes options to the generator
//             // [.withPrompts()]            // simulates the prompt answers
//             // [.build(runContext => {     // instantiates Environment/Generator
//             //     [runContext.env...]       // does something with the environment
//             //         [runContext.generator...] // does something with the generator
//             // })]
//         .run();                     // runs the environment, promises a RunResult
//             // [result.create().run()] // instantiates a new RunContext at the same directory
//         // );
//         afterEach(() => {
//             if (runResult) {
//                 runResult.restore();
//             }
//         });
//         it('runs correctly', () => {
//             // runs assertions using mem-fs.
//             // [runResult.assertFile('file.txt');]
//             // [runResult.assertNoFile('file.txt');]
//             // [runResult.assertFileContent('file.txt', 'content');]
//             // [runResult.assertEqualsFileContent('file.txt', 'content');]
//             // [runResult.assertNoFileContent('file.txt', 'content');]
//             // [runResult.assertJsonFileContent('file.txt', {});]
//             // [runResult.assertNoJsonFileContent('file.txt', {});]
//         });
//     });
// });

describe("react generator", () => {
    describe("react config file", () => {
        // let runResult;
        // beforeEach(async () => {
        //     runResult = await helpers
        //         .create(
        //             // instantiates RunContext
        //             "namespace", // namespace or generator
        //             {}, // test options
        //             {} // environment options
        //         )
        //         //     [.cd(dir)]                  // runs the test inside a non temporary dir
        //         // [.doInDir(dir => {})        // prepares the test dir
        //         //     [.withGenerators([])]       // registers additional generators
        //         // [.withLookups({})]          // runs Environment lookups
        //         // [.withOptions({})]          // passes options to the generator
        //         // [.withPrompts()]            // simulates the prompt answers
        //         // [.build(runContext => {     // instantiates Environment/Generator
        //         //     [runContext.env...]       // does something with the environment
        //         //         [runContext.generator...] // does something with the generator
        //         // })]
        //         .run(); // runs the environment, promises a RunResult
        //     // [result.create().run()] // instantiates a new RunContext at the same directory
        // });
        // afterEach(() => {
        //     if (runResult) {
        //         runResult.restore();
        //     }
        // });
        test("react app defaults", () =>
            helpers
                // .inTmpDir((dir) => {
                //     // `dir` is the path to the new temporary directory
                //     fs.copySync(path.join(__dirname, "../templates"), dir);
                // })
                .run(path.join(__dirname, "../index.ts"))
                .then(() => {
                    // assert.file('src/index.tsx');
                    // assert.fileContent('src/index.tsx', 'react');
                }));

        // test("react sass exits", () =>
        //     helpers
        //         .run(path.join(__dirname, "../index.ts"))
        //         .withOptions({
        //             sass: true,
        //         })
        //         .then(() => {
        //             // assert.file('src/index.tsx');
        //         }));
        //
        // test("react sass exits", () =>
        //     helpers
        //         .run(path.join(__dirname, "../index.ts"))
        //         .withOptions({
        //             sass: false,
        //         })
        //         .then(() => {
        //             // assert.file('src/index.tsx');
        //         }));
        //
        // test("react sass exits", () =>
        //     helpers
        //         .run(path.join(__dirname, "../index.ts"))
        //         .withOptions({
        //             sass: true,
        //         })
        //         .then(() => {
        //             // assert.file('src/index.tsx');
        //         }));
    });
});
