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
//get symbols from cards on the board
for (let i = 0; i < cards.length; i++) {
    cardSymbols[i] = cards[i].firstElementChild.className;
}


//function to init the board on game start or board reset
function initBoard() {
    cardSymbols = shuffle(cardSymbols);
    for (let i = 0; i < cards.length; i++) {
        cards[i].firstElementChild.className = cardSymbols[i];
        if (cards[i].classList.contains('match')) {
            cards[i].className = ('card');
        }
    }
    hitCounter = 0;
    pairsToDiscover = 8;
    timer = 0;
    setTime(timer);
    clearInterval(timeInterval);
    updateScore(0);
    initRating();
}

//function to hide the card
function hideCard(index) {
    cards[index].className = 'card';
}

//function to show the card
function showCard(index) {
    cards[index].classList.add('open', 'show');
}
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

//set up the listener event for cards
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
        if (!cards[i].classList.contains('open')) {
            hitCounter++;
            if (hitCounter === 1) {
                //timer
                timeInterval = setInterval(setTime, 1000);
            }
            showCard(i);
            if (hitCounter % 2 === 1) {
                firstCardIndex = i;
            } else {
                verifyMatch(i);
                updateScore(hitCounter);
            }
        }
    });
}

//set up event listener for restart button
rb.addEventListener('click', function() {
    initBoard();
})

//initialize user rating
function initRating() {
    while (starRating < 3) {
        star = document.createElement('li');
        star.innerHTML = '<i class="fa fa-star"</i>';
        stars.appendChild(star);
        starRating++;
    }
}