const express = require('express');
const bodyParser = require('body-parser');
const {connection} = require('./connection');
const cors = require('cors');
const  routerAPI = require('./routes/api')

const app = express();


// Database Connection

connection('mongodb://localhost:27017/GymMnegment').then(()=>{
    console.log('Database connected Successfully!')
}).catch((error)=>{
    console.error('Database Connection Error!',error);
});

// Frontend to backend Connection
corsOption = {
    origin:'http://localhost:3000',
    optionSuccessfulStatus: 200
}

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(express.json());

app.use('/api', routerAPI);

app.listen(5008 , ()=>{
    console.log('Server is Running on port 5008')
});