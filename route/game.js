import express from 'express';
const router = express.Router();

const all_questions = [
    {
        id: "0",
        question: "BAD"
    },
    {
        id: "1",
        question: "GOOD"
    },
    {
        id: "2",
        question: "DAD"
    },
    {
        id: "3",
        question: "MOM"
    },
    {
        id: "4",
        question: "HI"
    },
];
const characters_Answers = [
    {
        A: "1", B: "2", C: "3", D: "4", E: "5",F: "6",G: "7", H: "8", I: "9", J: "10",
        K: "11", L: "12", M: "13", N: "14", O: "15", P: "16", Q: "17", R: "18", S: "19",
        T: "20", U: "21", V: "22", W: "23", X: "24", Y: "25", Z: "26",
    }
];

//const allLevelQuestion = array("BAD","GOOD","DAD","MOM","HI","TELL","BED","MAN","WOMAN","GIRL","BOY","YES","HELLO","HI","DAD","MOM","CALL","STAY");

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
    const Instruction = 'If A = 1, B = 2, C = 3, 1 = A, 2 = B and 3 = C. What is '+current_question+'?';
    res.send(Instruction);
    
});

function checkAnswer(question,answer){

    //Loop through question String
    for (let i = 0; i < question.length; i++) {
        let char = question[i];
        //Check if character is string or not
        if (typeof char === 'string' || char instanceof String){
            char = char.toUpperCase();
        }else{
            // it's something else 
        }
    }
    
    //** Start Old Answer logic ***/
    //Convert to upper case
    // answer = answer.toUpperCase();
    // //console.log('Upper Case:: '+answer);
    // for(let i = 0; i < characters_Answers.length; i++) {
    //     const obj = characters_Answers[i];
    //     console.log('::: '+obj[answer]);
    //     if(obj[answer] == answer){
    //         //console.log(obj[answer]);
    //         return true;
    //     }

    // }
    // return false;
    //** End Old Answer logic ***/
}

router.get('/answer/:user_answer', (req, res)=>{
   
const { user_answer } = req.params; 
const question = current_question.question;
const question_answer = current_question.answer;
const check_answer = checkAnswer(question_answer,user_answer);
console.log('*********:: '+user_answer);
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

