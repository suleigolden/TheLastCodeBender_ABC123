import express from 'express';
const router = express.Router();

const all_questions = [
    {
        id: "0",
        description: "If A=1, B=2, C=3, What is",
        question: "H"
    },
    {
        id: "1",
        description: "If A=1, B=2, C=3, What is",
        question: "D"
    },
    {
        id: "2",
        description: "If 1=A, 2=B, 3=C, What is",
        question: "4"
    },
    {
        id: "3",
        description: "If 1=A, 2=B, 3=C, What is",
        question: "7"
    },
    {
        id: "4",
        description: "If A=1, B=2, C=3, What is",
        question: "G"
    },
];
const characters_Answers = [
    {
        A: "1", B: "2", C: "3", D: "4", E: "5",F: "6",G: "7", H: "8", I: "9", J: "10",
        K: "11", L: "12", M: "13", N: "14", O: "15", P: "16", Q: "17", R: "18", S: "19",
        T: "20", U: "21", V: "22", W: "23", X: "24", Y: "25", Z: "26",
    }
];

let current_question = '';

router.get('/', (req, res)=>{

    res.send("<h4>****Hello, Welcome to TheLastCodeBender ABC 123 Game!****</h4><a href='game/start'>Start Game</a>");
  
});
router.get('/start', (req, res)=>{
    let id = Math.floor(Math.random() * 5);
    //Convert the random num to string
    id = ''+id;
    console.log(id);
    const result = all_questions.find((question) => question.id === ""+id+"");
    current_question = result.question;
    let question_description = result.description+''+result.question+'?';
    res.send(question_description);
    
});

function checkAnswer(answer){
    //Convert to upper case
    answer = answer.toUpperCase();
    //console.log('Upper Case:: '+answer);
    for(let i = 0; i < characters_Answers.length; i++) {
        const obj = characters_Answers[i];
        console.log('::: '+obj[answer]);
        if(obj[answer] == answer){
            //console.log(obj[answer]);
            return true;
        }

    }

    return false;
}

router.get('/answer/:id', (req, res)=>{
   
const { id } = req.params; 
//const question = current_question.question;
const question_answer = current_question.answer;
const check_answer = checkAnswer(id);
console.log('*********:: '+id);
//console.log('The Q:: '+current_question.question);

 if(check_answer){
     console.log('True');
     res.send('<h1>Cooool!....</h1>');
 }else{
     console.log('false');
     res.send('<h1>Noooooop!....'+check_answer+'</h1>');
 }

});

export default router;

