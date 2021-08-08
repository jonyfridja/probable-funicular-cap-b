const mockedTransactions = require('./transactions.mock');
class TransactionsController {
    transactions = mockedTransactions;

    get = () => {
        return this.transactions
    }
}

module.exports = new TransactionsController();