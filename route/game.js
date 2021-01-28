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
//Reverse Chraracter to Number
function getCharacterToNumber($value){
	switch($value){
		case "A":
		return '1';
		case "B":
		return '2';
		case "C":
		return '3';
		case "D":
		return '4';
		case "E":
		return '5';
		case "F":
		return '6';
		case "G":
		return '7';
		case "H":
		return '8';
		case "I":
		return '9';
		case "J":
		return '10';
		case "K":
		return '11';
		case "L":
		return '12';
		case "M":
		return '13';
		case "N":
		return '14';
		case "O":
		return '15';
		case "P":
		return '16';
		case "Q":
		return '17';
		case "R":
		return '18';
		case "S":
		return '19';
		case "T":
		return '20';
		case "U":
		return '21';
		case "V":
		return '22';
		case "W":
		return '23';
		case "X":
		return '24';
		case "Y":
		return '25';
		case "Z":
		return '26';
		default:
		return "";
	}

}
//Reverse Number to Chraracter
 function getNumberToChraracter($value){
    switch($value){
        case "1":
        return "A";
        case "2":
        return "B";
        case "3":
        return "C";
        case "4":
        return 'D';
        case "5":
        return "E";
        case "6":
        return "F";
        case "7":
        return 'G';
        case "8":
        return "H";
        case "9":
        return "I";
        case "10":
        return "J";
        case "11":
        return "K";
        case "12":
        return "L";
        case "13":
        return "M";
        case "14":
        return "N";
        case "15":
        return "O";
        case "16":
        return "P";
        case "17":
        return "Q";
        case "18":
        return "R";
        case "19":
        return "S";
        case "20":
        return "T";
        case "21":
        return "U";
        case "22":
        return "V";
        case "23":
        return "W";
        case "24":
        return "X";
        case "25":
        return "Y";
        case "26":
        return "Z";
        default:
        return "";
    }

}

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
const check_answer = checkAnswer(current_question);

 if(check_answer == user_answer){
     console.log('True');
     res.send('<h1>Cooool!....</h1>');
 }else{
     console.log('false');
     res.send('<h1>Noooooop!....'+check_answer+'</h1>');
 }

});

export default router;

