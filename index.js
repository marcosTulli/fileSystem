module.exports.asyncReadChunk = require('./read/async.read.chunk').read;
module.exports.asyncRead = require('./read/async.read').read;
module.exports.promisifiedRead = require('./read/promisified.read').read;
module.exports.syncRead = require('./read/sync.read').read;
module.exports.syncReadPartial = require('./read/sync.read.partial').read;
module.exports.testRead = require('./read/test.read').read;
