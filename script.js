let your_score = 0;
let comp_score = 0;
const matchResult = document.querySelector('.matchResult')
const counter = document.querySelector('.counter')
const roundResult = document.querySelector('.roundResult')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')

const rock_btn = document.querySelector('#rock')
// rockOp.addEventListener('click', playMatch('Rock', getComputerChoice()));
rock_btn.addEventListener('click', () => {
    counterResultReset()
    message = playMatch("Rock", getComputerChoice())
    matchResult.textContent = message;
    scoreCalculator(message)
    counter.textContent = "The match's score is: " + your_score + "-" + comp_score;
    scoreEnder()                               
});

const paper_btn = document.querySelector('#paper')
paper_btn.addEventListener('click', () => {
    counterResultReset()
    message = playMatch("Paper", getComputerChoice())
    matchResult.textContent = message;
    scoreCalculator(message) 
    counter.textContent = "The match's score is: " + your_score + "-" + comp_score;
    scoreEnder()    
});

const scissor_btn = document.querySelector('#scissor')
scissor_btn.addEventListener('click', () => {
    counterResultReset()
    message = playMatch("Scissor", getComputerChoice())
    matchResult.textContent = message;
    scoreCalculator(message)
    counter.textContent = "The match's score is: " + your_score + "-" + comp_score;
    scoreEnder()    
});


function getComputerChoice(){
    let choice
    let random_num = Math.floor(Math.random() * 3)
    if(random_num === 0){
        choice = "Rock"
        return choice
    } else if(random_num === 1){
        choice = "Paper"
        return choice
    } else if(random_num === 2){
        choice = "Scissor"
        return choice
    }
}

function playMatch(playerSelection, computerSelection){
    playerSelection = caseCorrection(playerSelection)
    computerSelection = caseCorrection(computerSelection)

    if(playerSelection === "Rock" && computerSelection === "Paper"){
        return "You Lose! Paper beats Rock";
    }
    if(playerSelection === "Rock" && computerSelection === "Scissor"){
        return "You Win! Rock beats Scissor";
    }
    if(playerSelection === "Rock" && computerSelection === "Rock"){
        return "You Tie! Both of you chose Rock!"
    }
    if(playerSelection === "Paper" && computerSelection === "Scissor"){
        return "You Lose! Scissor beats Paper";
    }
    if(playerSelection === "Paper" && computerSelection === "Paper"){
        return "You Tie! Both of you chose Paper!";
    }
    if(playerSelection === "Paper" && computerSelection === "Rock"){
        return "You Win! Paper beats Rock"
    }
    if(playerSelection === "Scissor" && computerSelection === "Paper"){
        return "You Win! Scissor beats Paper"
    }
    if(playerSelection === "Scissor" && computerSelection === "Rock"){
        return "You Lose! Rock beats Scissor"
    }
    if(playerSelection === "Scissor" && computerSelection === "Scissor"){
        return "You Tie! Both of you chose Scissor!"
    }
}

function caseCorrection(string){
    new_string = string[0].toUpperCase() + string.substr(1).toLowerCase()
    return new_string
}

function scoreCalculator(message) {
    if (message.includes('Win')) {
        your_score += 1;
        return your_score
    } else if (message.includes('Lose')) {
        comp_score += 1;
        return comp_score
    }
}

function scoreEnder() {
    if (your_score === 5) {
        p1.textContent = "You have won the match!"
        p2.textContent = your_score + "-" + comp_score

        your_score = 0;
        comp_score = 0;
    }
    if (comp_score === 5) {
        p1.textContent = "You have won the match!"
        p2.textContent = your_score + "-" + comp_score

        your_score = 0;
        comp_score = 0;
    }
}

function counterResultReset(){
    p1.textContent = ""
    p2.textContent = ""
}