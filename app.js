import express from 'express';
import bodyParser from 'body-parser'; 
import gameRouter from './route/game.js';

//Initilize our express application
const app = express();

//Initialize the body parser midleware
app.use(bodyParser.json());

app.use('/api/game', gameRouter);

app.get('/', (req, res)=>{
    res.send('Hello World');
});

const Port = 5000;
app.listen(Port, () => console.log(`Server running on port ${Port}`));