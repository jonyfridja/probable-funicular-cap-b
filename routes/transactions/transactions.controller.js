const mockedTransactions = require('./transactions.mock');


class TransactionsController {
    transactions = mockedTransactions;

    get() {
        
    }

    getById() {

    }

}

module.exports = new TransactionsController();