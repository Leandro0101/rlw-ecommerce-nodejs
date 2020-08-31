const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.json('deu certo');
});

module.exports = route;