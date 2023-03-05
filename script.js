const player1= Math.floor(Math.random() *6 ) + 1; 
const player1dice=`images/dice${player1}.png `;
document.getElementById('check1').setAttribute('src',player1dice);

const player2= Math.floor (Math.random() *6 ) + 1; 
const player2dice=`images/dice${player2}.png `;
document.getElementById('check2').setAttribute('src',player2dice);



if(player1>player2){
    document.querySelector('h1').innerHTML="Player 1 is Winner!";
    var temp = document.getElementsByClassName("change");
    document.querySelector('h2').innerHTML="Player 1 🚩";
}
else if(player1<player2){
    document.querySelector('h1').innerHTML="Player 2 is Winner!";
    var temp = document.getElementsByClassName("change");
    document.querySelector('h3').innerHTML="Player 2 🚩";
}
else{
    document.querySelector('h1').innerHTML="Draw Hogya ! No Winner :(";
   
}
