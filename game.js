// Paper Rock Sicssors


let player;
let computer;
let winCounter = 0;
let loseCounter = 0;
let audio = new Audio('./win.mp3');



function win() {
    winCounter++;
    document.getElementById("computer-token").classList.add("computer-token__win");
    let score = winCounter;
    document.getElementById("win").innerHTML = score < 10 ? score = "&nbsp" + score : score;
   audio.play();
    document.getElementById("result").innerHTML = "Flawless victory!!!";
    
}

function lose() {
    loseCounter++;
    document.getElementById("computer-token").classList.add("computer-token__lose");
    let score = loseCounter;
    document.getElementById("lose").innerHTML = score < 10 ? score = "&nbsp" + score : score;
    document.getElementById("result").innerHTML = "You lose!!!";
}

function tie() {
    document.getElementById("computer-token").classList.add("computer-token__tie");
    document.getElementById("result").innerHTML = "Draw!!!";
}

function randomTokenNumber() {
    Math.floor(Math.random() * 3 + 1);
}

function cover() {
    document.getElementById("computer-token").innerHTML = `<img src="./question-mark.svg" class="computer-token__img"/>`;
    document.getElementById("computer-token").classList.remove("computer-token__win", "computer-token__lose", "computer-token__tie");
}

function getComputerToken() {

    switch (Math.floor(Math.random() * 3 + 1)) {
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "scissors";
            break;
        case 3:
            computer = "paper";

            return computer;
            console.loge(computer);
    }

}

function tokenCompare() {

    switch (player) {

        case "rock":
            if (computer == "scissors") {
                win();
            }
            else if (computer == "paper") {
                lose();
            }
            else {
                tie();
            }

            break;
        case "scissors":
            if (computer == "paper") {
                win();
            }
            else if (computer == "rock") {
                lose();
            }
            else {
                tie();
            }

            break;
        case "paper":

            if (computer == "rock") {
                win();
            }
            else if (computer == "scissors") {
                lose();
            }
            else {
                tie();
            }

            break;


    }

}

function switchToken() {
    switch (computer) {

        case "rock":
            document.getElementById("computer-token").innerHTML = `<img src="rock.svg" class="computer-token__img"/>`;
            break;
        case "scissors":
            document.getElementById("computer-token").innerHTML = `<img src="scissors.svg" class="computer-token__img"/>`;
            break;
        case "paper":
            document.getElementById("computer-token").innerHTML = `<img src="paper.svg" class="computer-token__img"/>`;
            break;
    }
}


// function computerTokenTransform(result) {
//     if (result == "win") { 
//         document.getElementById("computer-token").classList.add("computer-token__win"); 
//             }
//     else if (result == "lose") {
//          document.getElementById("computer-token").classList.add("computer-token__lose"); 

//         }
//     else {
// document.getElementById("computer-token").classList.add("computer-token_tie"); }
// }


function main() {

    tokenCompare();
    switchToken();
    setTimeout(cover, 1500);
    getComputerToken();
}

getComputerToken();
document.getElementById("rock").addEventListener("click", function () {
    player = "rock";
    main();

})

document.getElementById("scissors").addEventListener("click", function () {
    player = "scissors";
    main();
})

document.getElementById("paper").addEventListener("click", function () {
    player = "paper";
    main();

})







