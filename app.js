import express from 'express';
import bodyParser from 'body-parser'; 
import gameRouter from './route/game.js';
import ejs from 'ejs'; 
import path from 'path'; 
import player from 'play-sound';
const __dirname = path.resolve();


//Initilize our express application
const app = express();

// Set EJS as templating engine 
//app.set('view engine', 'ejs'); 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

//Initialize the body parser midleware
app.use(bodyParser.urlencoded({ extended: true }));

//Set Public Folder
app.use(express.static(path.join(__dirname,'public')));

app.use('/api/game', gameRouter);

app.get('/', (req, res)=>{
        
 player.play('../public/sound/yes.mp3', function (err) {
    if (err) throw err;
    console.log("Audio finished");
  });
  
    res.send('Hello World');
});

const Port = 5000;
app.listen(Port, () => console.log(`Server running on port ${Port}`));