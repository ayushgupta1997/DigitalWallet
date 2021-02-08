class User {
    constructor (name) {
        this.name = name;
        this.walletBalance = 0;
        this.debitCount = 0;
        this.creditCount = 0;
        this.statement = [];
    }

    async setWalletAmount(amount, type) {
        if (type == 'credit') {
            this.walletBalance += amount;
            this.statement.push()
            this.creditCount++;
        } else {
            this.walletBalance -= amount;
            this.debitCount++;
        }
    }

    async getWalletAmount() {
        return this.walletBalance;
    }
}

module.exports = User;