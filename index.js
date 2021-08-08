const express = require('express');
const morgan = require('morgan');

const app = express();


app.use(morgan('tiny'));

app.get('/', function (req, res) {
    res.send('hello, world!');
})


const PORT = process.env.PORT || 3030;
app.listen(PORT);

