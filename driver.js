const CreateWalletService = require('./services/createWallet');
const TransferMoneyService = require('./services/overview');
const Statement = require('./services/statement');
const OverView = require('./services/transferMoney');

async function main() {
    CreateWalletService.createWallet('Harry', 100)
    CreateWalletService.createWallet('Ron', 95.7)
    CreateWalletService.createWallet('Hermione', 104)
    CreateWalletService.createWallet('Albus', 200)
    CreateWalletService.createWallet('Draco', 500)

    Overview.getOverview();

    // TransferMoneyService.trasfer('Albus', 'Draco', 30);
    // TransferMoneyService.trasfer('Hermione', 'Harry', 2);
    // TransferMoneyService.trasfer('Albus', 'Ron', 5);
    
    // getOverview();
    // Statement.getStatement('Harry');
    // Statement.getStatement('Albus');
    

}
main();