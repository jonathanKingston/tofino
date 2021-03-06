// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/**
 * Disable the eslint "strict" and "no-commonjs" rules, since this is a script
 * that runs in node without any babel support, so it's not not a module
 * implicitly running in strict mode, and we can't use the import syntax.
 */
/* eslint-disable strict */
/* eslint-disable import/no-commonjs */

'use strict';

require('babel-polyfill');
require('babel-register')();

const handleTaskFailed = e => {
  /* eslint no-console: 0 */
  console.error('Build failed.');
  console.error(e.stack);
};

const Tasks = require('./tasks').default;

if (~process.argv.indexOf('--run')) {
  Tasks.run().then(null, handleTaskFailed);
} else if (~process.argv.indexOf('--run-dev')) {
  Tasks.runDev().then(null, handleTaskFailed);
} else if (~process.argv.indexOf('--package')) {
  Tasks.package().then(null, handleTaskFailed);
}
