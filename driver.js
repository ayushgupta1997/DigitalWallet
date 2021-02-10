const CreateWalletService = require('./services/createWallet');
// const TransferMoneyService = require('./services/overview');
// const Statement = require('./services/statement');
 const OverView = require('./services/overview');



async function main() {
    let walletService = new CreateWalletService();
    let overViewService = new OverView();
    
    walletService.createWallet('Harry', 100)
    walletService.createWallet('Ron', 95.7)
    walletService.createWallet('Hermione', 104)
    walletService.createWallet('Albus', 200)
    walletService.createWallet('Draco', 500)

    walletService.getOverview();

    // TransferMoneyService.trasfer('Albus', 'Draco', 30);
    // TransferMoneyService.trasfer('Hermione', 'Harry', 2);
    // TransferMoneyService.trasfer('Albus', 'Ron', 5);
    
    // getOverview();
    // Statement.getStatement('Harry');
    // Statement.getStatement('Albus');
    

}
main();