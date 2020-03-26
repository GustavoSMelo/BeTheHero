const express = require('express');
const app = express();
const Routes = require('./routes/routes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/', Routes);

const PORT = 3333;
app.listen(PORT, () =>
    console.log('Server is running in: http://localhost:3333')
);
