function getComputerChoice(){
    let choice
    let random_num = Math.floor(Math.random() * 3)
    console.log("Random number is " + random_num)
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
    console.log("The choice is " + choice)
}
getComputerChoice()

function playMatch(playerSelection, computerSelection){
    if(playerSelection === "Rock" && computerSelection === "Paper"){
        return "You Lose! Paper beats Rock"
    }
    if(playerSelection === "Rock" && computerSelection === "Scissor"){
        return "You Win! Rock beats Scissor"
    }
    if(playerSelection === "Rock" && computerSelection === "Rock"){
        return "You Tie! Both of you chose Rock!"
    }
    if(playerSelection === "Paper" && computerSelection === "Scissor"){
        return "You Lose! Scissor beats Paper"
    }
    if(playerSelection === "Paper" && computerSelection === "Paper"){
        return "You Tie! Both of you chose Paper!"
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