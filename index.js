
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sum = 0;
let sumEl = document.getElementById("sum-el");
let cards = "";
let cardEl = document.getElementById("card-el");
let cardsArr = [];
const newCardBtn = document.querySelector("#new-card-btn");
const startGameBtn = document.querySelector("#start-btn");
newCardBtn.disabled = true;
startGameBtn.disabled = false;


function startGame() {    
    let firstCard = generateRandomCard();
    let secondCard = generateRandomCard();
    cardsArr.push(firstCard);
    cardsArr.push(secondCard);
    sum = calculateSum(cardsArr);
    cardEl.textContent+= cardsArr;
    sumEl.textContent += sum;
    checkResult();
    startGameBtn.disabled = true;

}

function findRandomNumberBetweenTwoAndEleven() {
    return Math.round(Math.random() * 9) + 2;
}

function generateRandomCard() {
    return findRandomNumberBetweenTwoAndEleven();
}

function checkResult() {
    if(sum === 0){
        message = "Want to play a round?";
    } else if(sum < 21 && sum > 0){
        message = "Do you want to draw a new card ?";
        newCardBtn.disabled = false;
    }else if(sum === 21){
        hasBlackJack = true;
        isAlive = false;
        message = "Woooohooo!! You have got Blackjack"
        newCardBtn.disabled = true;
    }else{
        isAlive = false;
        message = "You're out of the game! Better luck next time !"
        newCardBtn.disabled = true;
    }
    messageEl.textContent = message;
}

function calculateSum(cardsArr){
    let sum = 0;
    for(let i=0; i<cardsArr.length; i++){
        sum += cardsArr[i];
    }
    return sum;
}

function newCard() {
    sumEl.textContent = "Sum : ";
    let newCard = generateRandomCard();
    cardsArr.push(newCard);
    sum = calculateSum(cardsArr);
    cardEl.textContent = "Cards : " + cardsArr;
    sumEl.textContent += sum;
    checkResult();
}

function resetGame() {
    cardsArr = [];
    sum = 0;
    cardEl.textContent = "Cards : " +  cardsArr;
    sumEl.textContent  = "Sum : ";
    checkResult();
    startGameBtn.disabled = false;
}