const mockedTransactions = require('./transactions.mock');
class TransactionsController {
    transactions = mockedTransactions;

    get = async () => {
        return this.transactions
    }
}

module.exports = new TransactionsController();