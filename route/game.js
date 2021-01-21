import express from 'express';
const router = express.Router();

router.get('/', (req, res)=>{

    res.send("<h4>****Hello, Welcome to TheLastCodeBender ABC 123 Game!****</h4><a href='game/start'>Start Game</a>");
  
});

router.get('/start', (req, res)=>{
    
    res.send("<h4>If A=1 and B=2, and 3=C. What is 4</h4>");
  
});

export default router;