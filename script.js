let your_score = 0;
let comp_score = 0;
const roundResult = document.querySelector('.roundResult')
const counter = document.querySelector('.counter')
const matchResult = document.querySelector('.matchResult')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')

const rock_btn = document.querySelector('#rock')
rock_btn.addEventListener('click', () => {
    counterResultReset()
    message = playMatch("Rock", getComputerChoice())
    roundResult.textContent = message;
    scoreCalculator(message)
    counter.textContent = your_score + "-" + comp_score;
    scoreEnder()                               
});

const paper_btn = document.querySelector('#paper')
paper_btn.addEventListener('click', () => {
    counterResultReset()
    message = playMatch("Paper", getComputerChoice())
    roundResult.textContent = message;
    scoreCalculator(message) 
    counter.textContent = your_score + "-" + comp_score;
    scoreEnder()    
});

const scissor_btn = document.querySelector('#scissor')
scissor_btn.addEventListener('click', () => {
    counterResultReset()
    message = playMatch("Scissor", getComputerChoice())
    roundResult.textContent = message;
    scoreCalculator(message)
    counter.textContent = your_score + "-" + comp_score;
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
        return "The computer chose Paper\r\n You lose this round!";
    }
    if(playerSelection === "Rock" && computerSelection === "Scissor"){
        return "The computer chose Scissor\r\n You win this round!";
    }
    if(playerSelection === "Rock" && computerSelection === "Rock"){
        return "The computer chose Rock\r\nYou tie this round!"
    }
    if(playerSelection === "Paper" && computerSelection === "Scissor"){
        return "The computer chose Scissor\r\nYou lose this round!";
    }
    if(playerSelection === "Paper" && computerSelection === "Paper"){
        return "The computer chose Paper\r\nYou tie this round!";
    }
    if(playerSelection === "Paper" && computerSelection === "Rock"){
        return "The computer chose Rock\r\n You win this round!"
    }
    if(playerSelection === "Scissor" && computerSelection === "Paper"){
        return "The computer chose Paper\r\nYou win this round!"
    }
    if(playerSelection === "Scissor" && computerSelection === "Rock"){
        return "The computer chose Rock\r\nYou lose this round!"
    }
    if(playerSelection === "Scissor" && computerSelection === "Scissor"){
        return "The computer chose Scissor\r\nYou tie this round!"
    }
}

function caseCorrection(string){
    new_string = string[0].toUpperCase() + string.substr(1).toLowerCase()
    return new_string
}

function scoreCalculator(message) {
    if (message.includes('win')) {
        your_score += 1;
        return your_score
    } else if (message.includes('lose')) {
        comp_score += 1;
        return comp_score
    }
}

function scoreEnder() {
    if (your_score === 5) {
        roundResult.textContent = ""
        counter.textContent = ""
        p1.style.color = 'green'
        p2.style.color = 'green'
        p1.textContent = "You have won the match!"
        p2.textContent = your_score + "-" + comp_score

        your_score = 0;
        comp_score = 0;
    }
    if (comp_score === 5) {
        roundResult.textContent = ""
        counter.textContent = ""
        p1.style.color = 'red'
        p2.style.color = 'red'
        p1.textContent = "You have lost the match!"
        p2.textContent = your_score + "-" + comp_score

        your_score = 0;
        comp_score = 0;
    }
}

function counterResultReset(){
    p1.textContent = ""
    p2.textContent = ""
}