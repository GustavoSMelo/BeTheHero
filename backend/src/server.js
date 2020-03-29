const app = require('./app');

const PORT = 3333;
app.listen(PORT, () =>
    console.log('Server is running in http://localhost:3333')
);
