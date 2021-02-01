import express from 'express';
const router = express.Router();
import { current_question,getCharacterToNumber, getNumberToChraracter, getNextQuestion } from '../controllers/game_logic.js';


router.get('/', (req, res)=>{
    let instruction ="*****How to Play ABC-123 GAME*****";
	res.render('index',{instruction:instruction});
});

router.get('/start', (req, res)=>{
    //Get and display question
    let instruction = getNextQuestion();
    let success_message = '';
	res.render('game-play',{instruction:instruction, success_message:success_message});
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
//Process from form request
router.post('/useranswer', (req, res)=>{
    let user_answer = req.body.answer;
    const check_answer = checkAnswer(current_question);
    let success_message = '';

    if(check_answer === user_answer){
        success_message = 'Cooool!......';
    }else{
        success_message = 'Noooooo!...... '+check_answer;
    }
    console.log(success_message+' ::: '+check_answer);
    let instruction = getNextQuestion();
    res.render('game-play',{instruction:instruction, success_message:success_message});
    
 });
//Process from API request
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

