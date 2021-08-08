const { Router } = require("express");
const transactionsRouter = new Router();
const transactionsController = require('./transactions.controller')


transactionsRouter.get('/transactions', async function (req, res, next) {
    try {
        const transactions = await transactionsController.get()
        console.log('?')
        if (!transactions) return res.status(404);
        console.log('?')
        res.json(transactions);
    } catch (err) {

    }
})

module.exports = transactionsRouter;