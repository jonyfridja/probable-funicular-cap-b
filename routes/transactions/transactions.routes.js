const { Router } = require("express");
const transactionsRouter = new Router();


transactionsRouter.get('/transactions/:id', function (req, res, next) {
    
    res.json(mockedTransactions);
})

transactionsRouter.get('/transactions', function (req, res, next) {
    res.json(mockedTransactions);
})



transactionsRouter.post('/transactions', function (req, res, next) {
    res.json(mockedTransactions);
})
transactionsRouter.put('/transactions', function (req, res, next) {
    res.json(mockedTransactions);
})
transactionsRouter.delete('/transactions', function (req, res, next) {
    res.json(mockedTransactions);
})

module.exports = transactionsRouter;