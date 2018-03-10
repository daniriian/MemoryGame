//Variable declaration
let cardSymbols = []; //array to hold symbols
let hitCounter = 0;
let firstCardIndex = 0;
let pairsToDiscover = 8;
let timer = 0;
let timeInterval;
let mm = 0,
    ss = 0,
    starRating = 3;

//restart button
let rb = document.getElementById('restart_button');

//cards
let cards = document.querySelectorAll('.deck .card');

//elapsed time
let elapsedTime = document.querySelector('.timer');

//
let numOfMoves = document.querySelector('.moves');

//stars in Star Rating
let stars = document.querySelector('.stars');

//total number of moves
let m_totalMoves = document.getElementById('totalMoves');

//total time
let m_totalTime = document.getElementById('totalTime');

//Modal Star rating
let m_starRating = document.getElementById('starRating');

//modat - Score tabel
let modal = document.getElementById('modal');

/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */