const CreateWalletService = require('./services/createWallet');

async function main() {
    CreateWalletService.createWallet('Harry', 100)
    CreateWalletService.createWallet('Ron', 95.7)
    CreateWalletService.createWallet('Hermione', 104)
    CreateWalletService.createWallet('Albus', 200)
    CreateWalletService.createWallet('Draco', 500)

}
main();