const User = require('../models/user');

const Wallet = require('../createWallet');

class Statement {
    
    constructor () {}

    getStatement(name) {
        return User.getStatement(name);
    }

}

module.exports = Statement;