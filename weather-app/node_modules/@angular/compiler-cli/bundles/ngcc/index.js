
      import {createRequire as __cjsCompatRequire} from 'module';
      const require = __cjsCompatRequire(import.meta.url);
    
import {
  mainNgcc
} from "../chunk-FXCJCRLE.js";
import "../chunk-OFPWZYAK.js";
import {
  clearTsConfigCache
} from "../chunk-6MNQICMO.js";
import "../chunk-47T3GLS3.js";
import "../chunk-KXJ5LO4I.js";
import "../chunk-UPBLAOWL.js";
import {
  ConsoleLogger,
  LogLevel
} from "../chunk-CF2CT7RQ.js";
import "../chunk-L644G6CJ.js";
import "../chunk-4EAKVGWO.js";
import "../chunk-I7N7PLKQ.js";
import {
  NodeJSFileSystem,
  setFileSystem
} from "../chunk-K2U2VZ7S.js";
import "../chunk-HK36RNP3.js";
import "../chunk-SRFZMXHZ.js";

// bazel-out/darwin-fastbuild/bin/packages/compiler-cli/ngcc/index.mjs
import { dirname, join } from "path";
import { fileURLToPath } from "url";
function process(options) {
  setFileSystem(new NodeJSFileSystem());
  return mainNgcc(options);
}
var containingDirPath = dirname(fileURLToPath(import.meta.url));
var ngccMainFilePath = join(containingDirPath, "./main-ngcc.js");
export {
  ConsoleLogger,
  LogLevel,
  clearTsConfigCache,
  ngccMainFilePath,
  process
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
//# sourceMappingURL=index.js.map
