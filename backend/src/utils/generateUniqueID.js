const crypt = require('crypto');

module.exports = function generateUniqueID() {
    return crypt.randomBytes(4).toString('HEX');
};
