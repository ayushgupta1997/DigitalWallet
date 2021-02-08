const User = require('../models/user');

class Overview {
    constructor () {
        
    }
    static getOverview () {
        console.log("Statement =>");
        let users = Wallet.getWalletUser();
        for (let i = 0; i < users.length; i++) {
            let userName = user[i];
            let walletBalance = User.getWalletAmount(userName);
            console.log(`${userName} ${walletBalance}`);
        }
    }
}

module.exports = Overview;