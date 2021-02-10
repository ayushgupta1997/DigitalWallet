const User = require('../models/user');
let walletUsers = [];
class CreateWallet {
 
   
    constructor () {
       
    }
    
    async createWallet(name, amount) {
        console.log('Aya=>');
        let user = new User(name, amount);
        walletUsers.push(name);
        
    }
    getWalletUsers() {
        return walletUsers;
    }
    getOverview () {
       
        //console.log("Wallet Service", walletService);
        console.log("Statement =>");
        let users = this.getWalletUsers();
        console.log('Users=>', users);
        for (let i = 0; i < users.length; i++) {
            let userName = user[i];
            let walletBalance = User.getWalletAmount(userName);
            console.log(`${userName} ${walletBalance}`);
        }
    }

}

module.exports = CreateWallet;