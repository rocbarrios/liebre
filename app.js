const express = require('express');

const path = require('path');
const dotenv = require ('dotenv').config();

const app = express();

app.use(express.static('public',));

app.get('/', (req, res) => {
    const ruta = path.join(__dirname, './views/index.html')
    console.log('request en login');
    res.sendFile(ruta);
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});


app.listen(process.env.PORT, () => {

    console.log('servidor corriendo')
});
