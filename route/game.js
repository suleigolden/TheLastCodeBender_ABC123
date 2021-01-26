import express from 'express';
const router = express.Router();

const all_questions = [
    {
        id: "1",
        question: "If A=1, B=2, C=3, What is D?",
        answer: "4"
    },
    {
        id: "2",
        question: "If 1=A, 2=B, 3=C, What is 4?",
        answer: "D"
    },
    {
        id: "3",
        question: "If 1=A, 2=B, 3=C, What is 7?",
        answer: "G"
    },
    {
        id: "1",
        question: "If A=1, B=2, C=3, What is G?",
        answer: "7"
    },
];
const characters_Answers = [
    {
        A: "1", B: "2", C: "3", D: "4", E: "5",F: "6",G: "7", H: "8", I: "9", J: "10",
        K: "11", L: "12", M: "13", N: "14", O: "15", P: "16", Q: "17", R: "18", S: "19",
        T: "20", U: "21", V: "22", W: "23", X: "24", Y: "25", Z: "26",
    }
];

router.get('/', (req, res)=>{

    res.send("<h4>****Hello, Welcome to TheLastCodeBender ABC 123 Game!****</h4><a href='game/start'>Start Game</a>");
  
});
router.get('/start', (req, res)=>{
    const id = "2";
    const result = all_questions.find((question) => question.id === id);
    res.send(result.question);
    
    //res.send("<h4>If A=1 and B=2, and 3=C. What is 4</h4>");
  
});

function checkAnswer(answer){

    answer = answer.toUpperCase();
    console.log('Upper Case:: '+answer);
    for(let i = 0; i < characters_Answers.length; i++) {
        const obj = characters_Answers[i];
        //console.log('::: '+obj[answer]);
        if(obj[answer] == answer){
            //console.log(obj[answer]);
            return true;
        }
        
    }

    return false;
}

router.get('/answer/:id', (req, res)=>{
   
const { id } = req.params;
const check_answer = checkAnswer(id);
console.log('*********:: '+id);
 if(check_answer){
     console.log('True');
     res.send('<h1>Cooool!....</h1>');
 }else{
     console.log('false');
     res.send('<h1>noooooop!....</h1>');
 }

});

export default router;

