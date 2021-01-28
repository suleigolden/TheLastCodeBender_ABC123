import express from 'express';
const router = express.Router();
import { getCharacterToNumber, getNumberToChraracter, getNextQuestion } from '../controllers/game_logic.js';

let current_question = '';

router.get('/', (req, res)=>{
    res.send("<h4>****Hello, Welcome to TheLastCodeBender ABC 123 Game!****</h4><a href='game/start'>Start Game</a>");
});

router.get('/start', (req, res)=>{
    //Get and display question
    res.send(getNextQuestion());
});

function checkAnswer(question){
  let final_answer = '';
    //Loop through question String
    for (let i = 0; i < question.length; i++) {
        let char = question[i];
        //Check if character is string or not
        if (typeof char === 'string' || char instanceof String){
            char = char.toUpperCase();
            final_answer += getCharacterToNumber(char);
        }else{
            final_answer += getNumberToChraracter(char);
        }
    }
    
    return final_answer;
    
}

router.get('/answer/:user_answer', (req, res)=>{
   
const { user_answer } = req.params; 
const check_answer = checkAnswer(current_question);

 if(check_answer == user_answer){
     console.log('True');
     res.send('<h1>Cooool!....</h1>');
 }else{
     console.log('false');
     res.send('<h1>Noooooop!....'+check_answer+'</h1>');
 }

 //get and display next question 
 res.send(getNextQuestion());

});

export default router;

