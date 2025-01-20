#!/usr/bin/env node

      import {createRequire as __cjsCompatRequire} from 'module';
      const require = __cjsCompatRequire(import.meta.url);
    
import {
  main
} from "../../chunk-JADZF6LG.js";
import "../../chunk-47T3GLS3.js";
import "../../chunk-KXJ5LO4I.js";
import "../../chunk-UPBLAOWL.js";
import "../../chunk-4EAKVGWO.js";
import "../../chunk-I7N7PLKQ.js";
import {
  NodeJSFileSystem,
  setFileSystem
} from "../../chunk-K2U2VZ7S.js";
import "../../chunk-HK36RNP3.js";
import {
  __require,
  __toESM
} from "../../chunk-SRFZMXHZ.js";

// bazel-out/darwin-fastbuild/bin/packages/compiler-cli/src/bin/ngc.mjs
import "reflect-metadata";
async function runNgcComamnd() {
  process.title = "Angular Compiler (ngc)";
  const args = process.argv.slice(2);
  setFileSystem(new NodeJSFileSystem());
  let tsickleModule;
  try {
    tsickleModule = (await Promise.resolve().then(() => __toESM(__require("tsickle"), 1))).default;
  } catch {
  }
  process.exitCode = main(args, void 0, void 0, void 0, void 0, void 0, tsickleModule);
}
runNgcComamnd().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
//# sourceMappingURL=ngc.js.map
