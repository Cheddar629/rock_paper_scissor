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

function game(){
    console.log("Hello, you will now play 5 matches of rock-paper-scissor against the computer!")
    let user_choice 
    for(let i = 1; i <= 5; i++){
        user_choice = prompt("What option are you going to choose: Rock, Paper or Scissor?")
        console.log(playMatch(user_choice, getComputerChoice()))
    }
}

const rockOp = document.querySelector('#rock')
// rockOp.addEventListener('click', playMatch('Rock', getComputerChoice()));
rockOp.addEventListener('click', () => {
    return console.log(playMatch("Rock", getComputerChoice()));
});

const paperOp = document.querySelector('#paper')
paperOp.addEventListener('click', () => {
    let result = console.log(playMatch("Paper", getComputerChoice()))
    return result
});

const scissorOp = document.querySelector('#scissor')
scissorOp.addEventListener('click', () => {
    return console.log(playMatch("Scissor", getComputerChoice()))
});