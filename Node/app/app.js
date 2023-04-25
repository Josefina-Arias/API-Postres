const express = require("express");
const morgan = require("morgan");

const controller = require("../controller/product.controller");

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res)=>{
    res.send("Esto es App de postres");
});

app.use(express.json());
app.use('/api/v1', controller);


module.exports = app;