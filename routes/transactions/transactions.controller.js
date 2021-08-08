const mockedTransactions = require('./transactions.mock');

class TransactionsController {
    transactions = mockedTransactions;
    gId = 101
    get = async () => {
        return this.transactions
    }

    create = async (transaction) => {
        const keys = ['tradingParty',
            'counterparty',
            'amount'];

        const missingKeys = keys.filter((key) => !transaction[key])
        if (missingKeys.length > 0) throw new Error(`Incomplete object`)

        const newTransaction = { ...transaction, id: this.gId++ }
        this.transactions.push(newTransaction)
        return newTransaction
    }

}

module.exports = new TransactionsController();