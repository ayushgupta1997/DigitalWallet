const User = require('../models/user');

User = require('../user');

class CreateWallet {
    constructor () {
        this.walletUsers = new Map(); // total wallets
    }
    async createWallet(name) {
        let user = new User(name);
        this.walletUsers.push(user);
    }

}

module.exports = CreateWallet;