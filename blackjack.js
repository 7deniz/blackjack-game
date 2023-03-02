"use strict";

// let cards = [];
// let sum = 0;
// let hasBlackJack = false;
// let isAlive = false;
// let message = "";

// let messageEl = document.getElementById("message-el");
// // let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector(".sum-el");
// let cardsEl = document.querySelector(".cards-el");

// function getRandomCard() {
//   let randomNumber = Math.floor(Math.random() * 13) + 1;
//   if (randomNumber === 1) {
//     return 11;
//   } else if (randomNumber > 10) {
//     return 10;
//   } else {
//     return randomNumber;
//   }
// }
// function startGame() {
//   let isAlive = true;
//   let firstCard = getRandomCard();
//   let secondCard = getRandomCard();
//   cards = [firstCard, secondCard];
//   sum = firstCard + secondCard;
//   renderGame();
// }
// function renderGame() {
//   cardsEl.textContent = " Cards: ";
//   for (let i = 0; i < cards.length; i++) {
//     cardsEl.textContent += cards[i] + "-";
//   }

//   sumEl.textContent = "Sum: " + sum;
//   if (sum <= 20) {
//     message = "Do you want to draw a new card? 🙂";
//   } else if (sum === 21) {
//     hasBlackJack = true;
//     message = "Wohoo! You've got Blackjack! 🥳";
//   } else {
//     isAlive = false;
//     message = "You're out of the game! 😭";
//   }
//   messageEl.textContent = message;
// }

// function newCard() {
//   if (isAlive === true && hasBlackJack === false) {
//     let card = getRandomCard();
//     sum += card;
//     cards.push(card);
//     renderGame();
//   }
// }
// let age = 22;
// if (age <= 21) {
//   console.log(`You can not enter the club!`);
// } else {
//   console.log("Welcome!");
// }

// let age = 101;
// if (age < 100) {
//   console.log("Not Eligible");
// } else if (age === 100) {
//   console.log("Here is your birthday card from the King!");
// } else {
//   console.log("Not elegible, you have already gotten one");
// }

// console.log(4 === 3); // f
// console.log(5 > 2); // t
// console.log(12 > 12); //f
// console.log(3 < 0); //f
// console.log(3 >= 3); // t
// console.log(11 <= 11); //t
// console.log(3 <= 2); //f

//
// let myself = [
//   "3 months of front-end development",
//   "a bachelor degree",
//   "know html-css-js",
//   "swimming, reading, playing games, socialising",
// ];
// let experience = [
//   "CEO at Scrimba",
//   "Frontend developer at Xeneta",
//   "People counter for Norstat",
// ];
// console.log(experience[1]);
// console.log(experience[0]);

// let ozzie = ["Ozzie Skysea", 46, true];
// console.log(ozzie[2]);

// let cards1 = [7, 5];
// cards1.push(9);

// let messages = [
//   "Hey, how's it going?",
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately.",
// ];

// let newMessage = "Same here!";
// messages.push(newMessage);
// console.log(messages);

///
// for (let i = 1; i < 21; i += 1) {
//   console.log(i);
// }
// for (let i = 10; i < 101; i += 10) {
//   console.log(i);
// }
// let cards2 = [3, 5, 8, 9];
// for (let i = 0; i < cards2.length; i++) {
//   console.log(cards2[i]);
// }

// ///
// let sentence = ["Hello ", "my ", "name ", "is ", "Per"];
// let greetingEl = document.getElementById("greeting-el");

// for (let i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += sentence[i];
// }

////
// let player1Time = 102;
// let player2Time = 107;

// function totalRaceTime() {
//   return player1Time + player2Time;
// }
// let totalTime = totalRaceTime();
// console.log(totalTime);
///
// function rollDice() {
//   let randomNumber = Math.floor(Math.random() * 6) + 1;
//   return randomNumber;
// }
// console.log(rollDice());

///
// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//   showSolution();
// }
// function showSolution() {
//   console.log("Showing the solution....");
// }

///
// let likesDocumentaries = true;
// let likesStartups = false;
// if (likesDocumentaries === true || likesStartups === true) {
//   recommendMovie();
// }
// function recommendMovie() {
//   console.log("Hey, check out this new film we think you will like!");
// }
// let airBnbCastle = {
//   title: "live like a king",
//   isPrivateRoom: true,
//   stars: 4.95,
//   price: "190 / night",
//   features: ["4 guests", "1 bedroom", "2 beds"],
// };

// console.log(airBnbCastle.features);
///

///

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
  name: "Player",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ":$" + player.chips;

function getRandomCard() {
  let randomNumer = Math.floor(Math.random() * 13) + 1;
  if (randomNumer > 10) {
    return 10;
  } else if (randomNumer === 1) {
    return 11;
  } else {
    return randomNumer;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  player.chips -= 5;

  playerEl.textContent = player.name + ":$" + player.chips;
  renderGame();
}

// if (player.chips > 120) {

// }

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙄";
  } else if (sum === 21) {
    message = "You've got Blackjack! 🎉😎";
    hasBlackJack = true;
    player.chips += 70;
  } else {
    message = "You're out of the game! 😣👎😭";
    isAlive = false;
  }
  if (player.chips === 0) {
    isAlive = false;
    message = "GAME OVER! 😱⛔❌😟";
  }
  messageEl.textContent = message;
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
