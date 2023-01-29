const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

//Routes
app.get('/', (req,res) => {
    res.send('hello world');
});

module.exports = app;