var b1,b2,b3,b4,b5,b6,b7,b8,b9;
let player1=prompt("Player 1 : ");
let player2=prompt("Player 2 : ");
let message=document.getElementById('message')
console.log(player1)
console.log(player2)


//buttons access
b1=document.getElementById('B1')
b2=document.getElementById('B2')
b3=document.getElementById('B3')
b4=document.getElementById('B4')
b5=document.getElementById('B5')
b6=document.getElementById('B6')
b7=document.getElementById('B7')
b8=document.getElementById('B8')
b9=document.getElementById('B9')

let turns=document.querySelector('#turns');
let outcome=document.querySelector('#outcome')
let reset=document.getElementById('reset')
let typeO=true;

function Textmessage(player1,player2){
message.innerText=`  ${player1} = O \n`;
message.innerText+=` ${player2} = X `;
turnsMessage('O');  
}
//Turn changing
function Texting(button){
   
    if(typeO){
button.innerText='O';
typeO=false;
turnsMessage('X')
    }
    else{
        button.innerText='X';
        typeO=true;
        turnsMessage('O');  
    }
    button.disabled=true;
    checkWin(); 
}

//Display turns message
function turnsMessage(turn){
    turns.innerHTML=`${turn}\' Turns`;
}

//Check who is winner
function checkWin(){
    if((b1.innerText=='X' && b2.innerText=='X' && b3.innerText=='X') || (
b4.innerText=='X' && b5.innerText=='X' && b6.innerText=='X') || 
(b7.innerText=='X' && b8.innerText=='X' && b9.innerText=='X') ||
(b1.innerText=='X' && b5.innerText=='X' && b9.innerText=='X') ||
(b3.innerText=='X' && b5.innerText=='X' && b7.innerText=='X') ||
(b1.innerText=='X' && b4.innerText=='X' && b7.innerText=='X') ||
(b2.innerText=='X' && b5.innerText=='X' && b8.innerText=='X') ||
(b3.innerText=='X' && b6.innerText=='X' && b9.innerText=='X')){
        winning(player2);
    }
   else if((b1.innerText=='O' && b2.innerText=='O' && b3.innerText=='O') || (
b4.innerText=='O' && b5.innerText=='O' && b6.innerText=='O') || 
(b7.innerText=='O' && b8.innerText=='O' && b9.innerText=='O') ||
(b1.innerText=='O' && b5.innerText=='O' && b9.innerText=='O') ||
(b3.innerText=='O' && b5.innerText=='O' && b7.innerText=='O') ||
(b1.innerText=='O' && b4.innerText=='O' && b7.innerText=='O') ||
(b2.innerText=='O' && b5.innerText=='O' && b8.innerText=='O') ||
(b3.innerText=='O' && b6.innerText=='O' && b9.innerText=='O')){
        winning(player1);
    }
//Disable buttons when game wins
}
function disablebuttons(){
buttons.forEach((buttons)=>{
buttons.disabled=true;
})
}

//Winning message
function winning(winner){
outcome.innerHTML=`    ${winner} is Winner`;
outcome.style.visibility='visible';
disablebuttons();
}
Textmessage(player1,player2);
//Any click on button
buttons=document.querySelectorAll('.box')
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click',()=>{
        Texting(buttons);
        })
    
})

//Reset the game
reset.addEventListener('click',()=>{
    buttons.forEach((buttons)=>{
        buttons.innerText='';
        outcome.style.visibility='hidden';
        buttons.disabled=false;
        turns.innerHTML='';
    })
});