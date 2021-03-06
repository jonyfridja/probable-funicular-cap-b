"use strict";

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { logResponseBody } = require('./middlewares/log.middleware');
var bodyParser = require('body-parser')


const transactionsRouter = require('./routes/transactions/transactions.routes');
const app = express();

app.use(bodyParser.json());
app.use(morgan('tiny'))
app.use(logResponseBody)

if (process.env.NODE_ENV !== 'production')
    app.use(cors({
        origin: 'http://localhost:3000'
    }))

app.use('/transactions', transactionsRouter);

const PORT = process.env.PORT || 3030;
app.listen(PORT);

