const mongoService = require('../../mongo-db.service');
class TransactionsController {
    collectionName = 'transactions'



    get = async () => {
        return mongoService.query(this.collectionName)
    }

    create = async (transaction) => {
        try {
            this._validateTransaction(transaction);
            return mongoService.insert(this.collectionName, transaction);
        } catch (err) {
            throw err;
        }
    }

    _validateTransaction(transaction) {
        const keys = ['tradingparty',
            'counterparty',
            'amount'];

        const missingKeys = keys.filter((key) => !transaction[key])
        if (missingKeys.length > 0) throw new Error(`Incomplete object`)
    }

}

module.exports = new TransactionsController();