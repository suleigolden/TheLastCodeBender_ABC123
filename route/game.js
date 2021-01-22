import express from 'express';
const router = express.Router();

const letters_Answers = [
    {
        A: "1",
        B: "2",
        C: "3",
        D: "4",
        E: "5",
        F: "6",
        G: "7",
        H: "8",
        I: "9",
        J: "10",
        K: "11",
        L: "12",
        M: "13",
        N: "14",
        O: "15",
        P: "16",
        Q: "17",
        R: "18",
        S: "19",
        T: "20",
        U: "21",
        V: "22",
        W: "23",
        X: "24",
        Y: "25",
        Z: "26",
    }
];

router.get('/', (req, res)=>{

    res.send("<h4>****Hello, Welcome to TheLastCodeBender ABC 123 Game!****</h4><a href='game/start'>Start Game</a>");
  
});
router.get('/start', (req, res)=>{
    
    res.send("<h4>If A=1 and B=2, and 3=C. What is 4</h4>");
  
});
router.get('/start:answer', (req, res)=>{
const { answer } = req.params;
    if(answer == "4"){

    }
});

export default router;