let config = require('./protractor.conf.js').config;

// If UPDATE_GOLDEN_IMAGES is "1" or "true", blue-harvest will update the reference
// screenshots instead of comparing against them.
process.env['UPDATE_GOLDEN_IMAGES'] = 'true';

exports.config = config;