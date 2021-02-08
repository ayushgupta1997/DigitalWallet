const User = require('../models/user');

User = require('../user');

class TransferMoney {
    constructor () {
        
    }
    async static transferMoney(payer, reciever, amount) {
       if (amount < 0.0001) {
           console.log(`The amount is less than the threshold set, Transaction cannot be made between ${payer} and ${reciever}`);
           return;
       } else {
           if (payer.walletBalance < amount) {
               console.log('transaction cannot happen due to insufficient funds');
               return;
           }
           User.setWalletBalance(payer, 'debit');   
           User.setWalletBalance(reciever, 'credit');
       }
    }

}

module.exports = TransferMoney;