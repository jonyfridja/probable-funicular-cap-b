"use strict";

const express = require('express');
const morgan = require('morgan');
const transactionsRouter = require('./routes/transactions/transactions.routes');
const app = express();


app.use(morgan('tiny'));

app.use(transactionsRouter);

const PORT = process.env.PORT || 3030;
app.listen(PORT);

