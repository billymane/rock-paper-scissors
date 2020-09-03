const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')

function computerPlay() {
    
    let game = ["rock", "paper", "scissors"];

    let random = Math.floor((Math.random() * game.length));
    let randomName = game[random];

    return randomName;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            return "You Lose!";
        } else if (computerSelection === "scissors") {
            return "You Win!";
        } else {
            return "Tie";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "scissors") {
            return "You Lose!";
        } else if (computerSelection === "rock") {
            return "You Win!";
        } else {
            return "Tie";
        }
    } else {
        if (computerSelection === "rock") {
            return "You Lose!";
        } else if (computerSelection === "paper") {
            return "You Win!";
        } else {
            return "Tie";
        }
    }
}

function winOrLose(e) {
    if (e === "You Win!" && playerScore.textContent !== "Winner!") {
        playerScore.textContent++;
        if (playerScore.textContent === "5") {
            playerScore.textContent = "Winner!";
        }
    } else if (e === "You Lose!" && computerScore.textContent !== "Winner!") {
        computerScore.textContent++;
        if (computerScore.textContent === "5") {
            computerScore.textContent = "Winner!";
        }
    }
}

rock.addEventListener('click', function () {
    const result = (playRound("rock", computerPlay()))
    winOrLose(result)
})
paper.addEventListener('click', function () {
    const result = (playRound("paper", computerPlay()))
    winOrLose(result)
})
scissors.addEventListener('click', function () {
    const result = (playRound("scissors", computerPlay()))
    winOrLose(result)
})

// function game() {

//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Rock, Paper or Scissors?");

//         let result = playRound(playerSelection, computerPlay());

//         if (result === "win") {
//             playerScore++;
//             console.log("You win!")
//             console.log("Player: " + playerScore + " Computer: " + computerScore)
//         } else if (result === "lose") {
//             computerScore++;
//             console.log("You lose!")
//             console.log("Player: " + playerScore + " Computer: " + computerScore)
//         } else {
//             console.log("TIE");
//             console.log("Player: " + playerScore + " Computer: " + computerScore)
//         }
//     }

//     if (playerScore > computerScore) {
//         console.log( "You Win! " + playerScore + ":" + computerScore);
//     } else if (computerScore > playerScore) {
//         console.log( "You Lose! " + playerScore + ":" + computerScore);
//     } else {
//         console.log( "It's a tie! " + playerScore + ":" + computerScore);
//     }
// }

// game()