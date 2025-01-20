#!/usr/bin/env node

      import {createRequire as __cjsCompatRequire} from 'module';
      const require = __cjsCompatRequire(import.meta.url);
    
import {
  parseCommandLineOptions
} from "../chunk-YSDCIO24.js";
import {
  mainNgcc
} from "../chunk-FXCJCRLE.js";
import "../chunk-OFPWZYAK.js";
import "../chunk-6MNQICMO.js";
import "../chunk-47T3GLS3.js";
import "../chunk-KXJ5LO4I.js";
import "../chunk-UPBLAOWL.js";
import "../chunk-CF2CT7RQ.js";
import "../chunk-L644G6CJ.js";
import "../chunk-4EAKVGWO.js";
import "../chunk-I7N7PLKQ.js";
import "../chunk-K2U2VZ7S.js";
import "../chunk-HK36RNP3.js";
import "../chunk-SRFZMXHZ.js";

// bazel-out/darwin-fastbuild/bin/packages/compiler-cli/ngcc/main-ngcc.mjs
process.title = "ngcc";
var startTime = Date.now();
var options = parseCommandLineOptions(process.argv.slice(2));
(async () => {
  try {
    await mainNgcc(options);
    if (options.logger) {
      const duration = Math.round((Date.now() - startTime) / 1e3);
      options.logger.debug(`Run ngcc in ${duration}s.`);
    }
    process.exitCode = 0;
  } catch (e) {
    console.error(e.stack || e.message);
    process.exit(typeof e.code === "number" ? e.code : 1);
  }
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
//# sourceMappingURL=main-ngcc.js.map
