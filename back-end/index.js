const express =  require('express');
const app = express();
const routes = require('./src/routes');

const Category = require("./src/models/Category");

app.use(express.json());
app.use('/', routes);
app.listen(3001);