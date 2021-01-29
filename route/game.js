import express from 'express';
const router = express.Router();
import { getCharacterToNumber, getNumberToChraracter, getNextQuestion } from '../controllers/game_logic.js';


let current_question = '';

router.get('/', (req, res)=>{
    let instruction ="*****How to Play ABC-123 GAME*****";
	res.render('index',{instruction:instruction});
});

router.get('/start', (req, res)=>{
    //Get and display question
    let instruction = getNextQuestion();
	res.render('game-play',{instruction:instruction});
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
let success_message = '';

 if(check_answer == user_answer){
    success_message = 'Cooool!......';
 }else{
    success_message = 'Noooooo!......';
 }

let instruction = getNextQuestion();
res.render('game-play',{instruction:instruction, success_message:success_message});
    
});

export default router;

