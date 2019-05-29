const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

var customers = [
    {id: 101, name: "Stark Industries", start_date: 1999, high_credit: 100},
    {id: 102, name: "Wayne Enterprises", start_date: 2010, high_credit: 80},
    {id: 103, name: "Lexcorp", start_date: 2008, high_credit: 40},
    {id: 104, name: "Oscorp", start_date: 1957, high_credit: 30}
]

app.get('/', function(req, res) {
    return res.json(customers);
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});