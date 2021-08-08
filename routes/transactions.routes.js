const { Router } = require("express");
const mockedTransactions = require('../mocked/transactions.mock');
const transactionsRouter = new Router();


transactionsRouter.get('/transactions', function (req, res, next) {
    res.json(mockedTransactions);
})

module.exports = transactionsRouter;