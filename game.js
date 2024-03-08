
// To remove old card 

// document.getElementById("APA").replaceChild(document.getElementById("7C"), document.getElementById("APA").firstChild)


// ****************       GET THE DECK       *****************************

const deck = [];
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const id = card.id;
    const value = parseInt(card.dataset.value);
    const suitMatch = card.querySelector('img').src.match(/\/([a-z]+)\.svg$/);
    const suit = suitMatch ? suitMatch[1].toUpperCase() : null;
    deck.push({id, value, suit});
    
});

let start = document.getElementById("start-game").addEventListener("click", determineTurnWinner);


// *****************     SHUFFLE DECK        *********************************

function shuffle(deckArr) {
    let currentIndex = deckArr.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [deckArr[currentIndex], deckArr[randomIndex]] = [
        deckArr[randomIndex], deckArr[currentIndex]];
    }
    return deckArr;
}
  shuffle(deck);
  console.log(deck);


// *****************     DEAL CARDS FOR PLAYERS       *********************************

let handPA = [];
let handPB = [];
let deckCurrentIndex = deck.length;

handPA = deck.slice(0, 25);
handPB = deck.slice(26, 51);

console.log("hand A = " + handPA);
console.log("number of cards PA = " + handPA.length);
console.log("hand B = " + handPB);
console.log("number of cards PB = " + handPB.length);


// ****************      PLAY CARDS    *********************************

//  document.getElementById("APA").replaceChild(document.getElementById("7C"), document.getElementById("APA").firstChild)
let cardA;
let cardB;


let DPA = document.querySelector(".pA_DeckPos_DPA");
let DPB = document.querySelector(".pB_DeckPos_DPB");

let clickA = DPA.addEventListener("click", playTurn);





// ********************     PLAY TURN LOGIC     ***************************

function playTurn() {

    cardA = handPA.pop();
    let cardCloneA = document.getElementById(cardA.id).cloneNode(true);
    cardCloneA.classList.remove("invisible");
    APA.appendChild(cardCloneA);

    cardB = handPB.pop();
    let cardCloneB = document.getElementById(cardB.id).cloneNode(true);
    cardCloneB.classList.remove("invisible");
    APB.appendChild(cardCloneB);
    
    determineTurnWinner(cardA.value, cardB.value);

}

// ********************     DETERMINE TURN WINNER      ***************************

function determineTurnWinner(valueCardA,valueCardB) {

    if(cardA && cardB) {
        
        if (valueCardA > valueCardB) {
            handPA.push(cardA, cardB);
            console.log("Player A wins the turn!");
        }
    
        if (valueCardA < valueCardB) {
            handPB.push(cardA, cardB);
            console.log("Player B wins the turn!");
        }
    
        if (valueCardA === valueCardB) {
            console.log("it's a tie.")
            
            if(clickA) {
                playBattle();
            }
        }

        console.log("Points PA: " + handPA.length);
        console.log("1st card A " + handPA[0]);
        console.log("Points PB: " + handPB.length);
        console.log("1st card B " + handPB[0]);
    }

    let clickB = DPB.addEventListener("click", cleanField);


}

 function playBattle() {
     
         let cardA1 = handPA.pop();
         let cardA2 = handPA.pop();
         let cardA3 = handPA.pop();
         let cardCloneA3 = document.getElementById(cardA1.id).cloneNode(true);
         cardCloneA3.classList.remove("invisible");
         APA3.appendChild(cardCloneA3);  
         
         let cardB1 = handPB.pop();
         let cardB2 = handPB.pop();
         let cardB3 = handPB.pop();
         let cardCloneB3 = document.getElementById(cardB.id).cloneNode(true);
         cardCloneB3.classList.remove("invisible");
         APB3.appendChild(cardCloneB3);
         determineTurnWinner(cardA3, cardB3);
        
 }

 function cleanField() {

    let apaToClean = document.getElementById("APA");
    let apbToClean = document.getElementById("APB");

    while(apaToClean.firstChild) {
        apaToClean.removeChild(apaToClean.firstChild);
    }

    while(apbToClean.firstChild) {
        apbToClean.removeChild(apbToClean.firstChild);
    }

 }

console.log("PA -after turn: " + handPA.length);
console.log("PB - after turn: " + handPB.length);

// ****************          GAME IS OVER     ************************

function gameOver() {
    console.log("GAME OVER");
    console.log("The winner is.... who wins!");
}