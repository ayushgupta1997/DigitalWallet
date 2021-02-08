class User {
    constructor (name, amount) {
        this.name = name;
        this.walletBalance = amount;
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

    async addStatement(name, type) {
        this.statement.push(`${name} ${type}`);
    }

    async getStatement(name) {
        return this.statement;
    }

    static getWalletAmount() {
        return this.walletBalance;
    }

    async noOfTransactions(name) {
        return this.debitCount + this.creditCount;
    }
}

module.exports = User;