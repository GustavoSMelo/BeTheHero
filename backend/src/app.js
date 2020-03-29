const express = require('express');
const app = express();
const { errors } = require('celebrate');
const Routes = require('./routes/routes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(Routes);
app.use(errors());

module.exports = app;
