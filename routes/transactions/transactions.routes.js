const { Router } = require("express");
const transactionsRouter = new Router();
const transactionsController = require('./transactions.controller')


transactionsRouter.get('/', async function (req, res, next) {
    try {
        const transactions = await transactionsController.get()
        console.log('?')
        if (!transactions) return res.status(404);
        console.log('?')
        res.json(transactions);
    } catch (err) {

    }
})
transactionsRouter.post('/', async function (req, res, next) {
    try {
        res.json(await transactionsController.create(req.body));
    } catch (err) {
        res.status(400).send(err.message);
    }
})

module.exports = transactionsRouter;