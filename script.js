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

