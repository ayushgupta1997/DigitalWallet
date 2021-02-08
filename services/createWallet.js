const User = require('../models/user');

class CreateWallet {
    constructor () {
        this.walletUsers = [];
    }
    static createWallet(name, amount) {
        let user = new User(name, amount);
        this.walletUsers.push(user);
    }
    async getWalletUsers() {
        return this.walletUsers;
    }

}

module.exports = CreateWallet;