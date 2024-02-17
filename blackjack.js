let deck = [
  2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8,
  8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 11, 11, 11, 11,
];

let samScore = 0;
let dealerScore = 0;
// let dealerWin, samWin;
// let gameFinished = false;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const isGameFinished = (score1, score2) => score1 >= 21 || score2 >= 21;

const drawCard = (deck) => {
  let index = getRandomInt(deck.length);
  const currentCard = deck[index];
  deck = deck.filter((card, i) => i !== index);
  return currentCard;
};

const checkGameStatus = (p1, p2) => {
  if (
    (p1 === 21 && p2 !== 21) ||
    (p1 <= 21 && p2 > 21) ||
    (p1 > p2 && p1 <= 21)
  ) {
    console.log("Sam Wins");
    // dealerWin = false;
    // samWin = true;
    return;
  } else if (
    (p2 === 21 && p1 !== 21) ||
    (p2 <= 21 && p1 > 21) ||
    (p2 > p1 && p2 <= 21)
  ) {
    console.log("Dealer Wins");
    // dealerWin = true;
    // samWin = false;
    return;
  } else if ((p1 === p2 && p1, p2 <= 21 || (p1 === 21 && p2 === 21))) {
    console.log("Draw");
    // samWin = false;
    // dealerWin = false;
    return;
  } else {
    console.log("No Winner");
    // samWin = false;
    // dealerWin = false;
    return;
  }
};

const displayGameStatus = (score1, score2) => {
  console.log("Final Score");
  console.log("Sam: ", score1);
  console.log("Dealer: ", score2);
  checkGameStatus(score1, score2);
};

samScore += drawCard(deck);
samScore += drawCard(deck);

dealerScore += drawCard(deck);
dealerScore += drawCard(deck);

console.log("Score for hand[1]");
console.log("Sam: ", samScore);
console.log("Dealer: ", dealerScore);

if (isGameFinished(samScore, dealerScore)) {
  displayGameStatus(samScore, dealerScore);
  return;
}

while (samScore < 17 || !isGameFinished(samScore, dealerScore)) {
  samScore += drawCard(deck);
}

if (isGameFinished(samScore, dealerScore)) {
  displayGameStatus(samScore, dealerScore);
  return;
}

while (dealerScore <= samScore) {
  dealerScore += drawCard(deck);
}

displayGameStatus(samScore, dealerScore);
