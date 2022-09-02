// Punti1
const B1 = document.querySelector('.B1');
B1.innerText = 0;
const P1 = document.querySelector('.P1');

// Punti2
const B2 = document.querySelector('.B2');
B2.innerText = 0;
const P2 = document.querySelector('.P2');

//game
const game1 = document.querySelector('.game1');
game1.innerText = 0;
const game2 = document.querySelector('.game2');
game2.innerText = 0;

//set
const set1 = document.querySelector('.set1');
set1.innerText = 0;
const set2 = document.querySelector('.set2');
set2.innerText = 0;

//restart
const restart = document.querySelector('.restart');
//back
const back = document.querySelector('.back')

//input values
const start = document.querySelector('.start');
var pla1 = document.querySelector('.pla1');
var pla2 = document.querySelector('.pla2');

// Displayed layout
let main = document.querySelector('main');
let buttons = document.querySelector('.buttons');
let adj = document.querySelector('.adj');
let startGame = document.querySelector('.startGame');
let endGame = document.querySelector('.endgame');

//endgame
let end = document.querySelector('.end');
let endgameText = document.querySelector('.endgameText');


// starter
let inputs = [];




//addEventListeners
P1.addEventListener('click', increasePoints1);
P2.addEventListener('click', increasePoints2);
restart.addEventListener('click', restart1);
start.addEventListener('click', starter);
end.addEventListener('click', restart2);
back.addEventListener('click', backPoints);




// functions

function starter(evento) {
    //if (document.querySelector('.Pl1').checkValidity() && document.querySelector('.Pl2').checkValidity()); {
    //validazione form iniziale

    evento.preventDefault();
    
    let input = {
        Player1: document.querySelector('.Pl1').value,
        Player2: document.querySelector('.Pl2').value,
    }

    inputs.push(input);

    document.querySelector('form').reset();
     
    pla1.innerText = input.Player1;
    pla2.innerText = input.Player2;

    startGame.classList.add('disappear');
    main.style.display='block';    
    buttons.classList.add('appear');    
    adj.classList.add('appear');
    
}


function increasePoints1 () {
    // Punti
    if (B1.innerText == 0) {
        B1.innerText = parseInt(B1.innerText) + 15;
    } else if (B1.innerText == 15) {
        B1.innerText = parseInt(B1.innerText) + 15;        
    } else if (B1.innerText == 30) {
        B1.innerText = parseInt(B1.innerText) + 10;        
    } else if (B1.innerText == 40 && B2.innerText == 40) {
        B1.innerText = "VA";
    } else if (B1.innerText == 40 && B2.innerText == "VA") {
        if(B2.innerText = 40) {
            B1.innerText = 40;
        }    
         // game and set
    } else {B1.innerText = 0; B2.innerText = 0; game1.innerText = parseInt(game1.innerText) + 1;
            if (parseInt(game1.innerText) >= 6 && parseInt(game1.innerText) >= parseInt(game2.innerText) +2) {
                set1.innerText = parseInt(set1.innerText) + 1; game1.innerText = 0; game2.innerText = 0;
                //end game
                if (parseInt(set1.innerText) == 2) {
                    buttons.classList.remove('appear');
                    adj.classList.remove('appear');
                    endGame.classList.add('appear');
                    endgameText.innerText = pla1.innerText + " WON!!!"
                }
            }
        }
}

function increasePoints2 () {
        // Punti
    if (B2.innerText == 0) {
        B2.innerText = parseInt(B2.innerText) + 15;
    } else if (B2.innerText == 15) {
        B2.innerText = parseInt(B2.innerText) + 15;        
    } else if (B2.innerText == 30) {
        B2.innerText = parseInt(B2.innerText) + 10;        
    } else if (B2.innerText == 40 && B1.innerText == 40) {
        B2.innerText = "VA";
    } else if (B2.innerText == 40 && B1.innerText == "VA") {
        if(B1.innerText = 40) {
            B2.innerText = 40;
        }

        // game and set
    } else {B2.innerText = 0; B1.innerText = 0; game2.innerText = parseInt(game2.innerText) + 1;
            if (parseInt(game2.innerText) >= 6 && parseInt(game2.innerText) >= parseInt(game1.innerText) +2) {
                set2.innerText = parseInt(set2.innerText) + 1; game2.innerText = 0; game1.innerText = 0;
                //endgame
                if (parseInt(set2.innerText) == 2) {
                    buttons.classList.remove('appear');
                    adj.classList.remove('appear');
                    endGame.classList.add('appear');
                    endgameText.innerText = pla2.innerText + " WON!!!"
                }
            }
        }
}

function restart1 () {
    B1.innerText = 0;
    B2.innerText = 0;
    game1.innerText = 0;
    game2.innerText = 0;
    set1.innerText = 0;
    set2.innerText = 0;
    startGame.classList.remove('disappear');
    main.style.display='none';
    buttons.classList.remove('appear');
    adj.classList.remove('appear');
}

function restart2 () {
    B1.innerText = 0;
    B2.innerText = 0;
    game1.innerText = 0;
    game2.innerText = 0;
    set1.innerText = 0;
    set2.innerText = 0;
    startGame.classList.remove('disappear');
    main.style.display='none';
    buttons.classList.remove('appear');
    adj.classList.remove('appear');
    endGame.classList.remove('appear');
}

function backPoints() {
// sviluppare
}


