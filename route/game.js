import express from 'express';
import path from 'path'; 
const __dirname = path.resolve();
import sound from 'sound-play';
const router = express.Router();
import { gameScore,current_score,getActionMessage,current_question,getCharacterToNumber, getNumberToChraracter, getNextQuestion } from '../controllers/game_logic.js';


router.get('/', (req, res)=>{
    let instruction ="How to Play ABC-123 GAME";
	res.render('index',{instruction:instruction});
});

router.get('/start', (req, res)=>{
    // let audio = new Audio('../public/sound/yes.mp3');
    // audio.play();
    //Get and display question
    let instruction = getNextQuestion();
    let success_message = '';
    let reset_score = 0;
	res.render('game-play',{instruction:instruction, success_message:success_message, current_score:reset_score});
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
        success_message = getActionMessage('correct');
        //current_score = gameScore('correct');
        const yesPath = path.join(__dirname, "./public/sound/yes.mp3");
        sound.play(yesPath);
    }else{
        success_message = getActionMessage('incorrect');
        //current_score = gameScore('incorrect');
        const noPath = path.join(__dirname, "./public/sound/no.mp3");
        sound.play(noPath);
    }
    console.log(success_message+' ::: '+check_answer);
    let instruction = getNextQuestion();
    res.render('game-play',{instruction:instruction, success_message:success_message, current_score:current_score});
    
 });
//Process from API request
router.get('/answer/:user_answer', (req, res)=>{
   
const { user_answer } = req.params; 
const check_answer = checkAnswer(current_question);
let success_message = '';

 if(check_answer == user_answer){
    success_message =  getActionMessage('correct');
    //current_score = gameScore('correct');
 }else{
    success_message =  getActionMessage('incorrect');
    //current_score = gameScore('incorrect');
 }

let instruction = getNextQuestion();
res.render('game-play',{instruction:instruction, success_message:success_message,current_score:current_score});
    
});


export default router;

