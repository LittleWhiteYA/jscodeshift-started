const path = require('path');
// FIXME: https://github.com/facebook/jscodeshift/pull/190
const jscodeshift = require('jscodeshift/src/Runner');

const opts = {
  transform: 'add-property.js',
  dry: true,
  print: true,
  path: ['hello.js'],
  _: ['hello.js'],
  verbose: 0,
  babel: true,
  extensions: 'js',
  runInBand: false,
  silent: false,
  parser: 'babel',
};

jscodeshift.run(path.resolve(opts.transform), opts.path, opts);
