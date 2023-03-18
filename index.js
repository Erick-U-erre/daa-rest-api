const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3000;


const RegistrandoUsuario = [
    {
        name: 'Hugo',
        color: 'Rojo'
    },
    {
        name: 'Pago',
        color: 'Rojo'
    },
    {
        name: 'Luis',
        color: 'Rojo'
    }
]


app.get('/', (req, res) => res.send('Rest API working!'));
app.get('/RegistrandoUsuario', (req, res) => res.json(RegistrandoUsuario));

app.listen(port, () => console.log('Server listening at port ${port}'));