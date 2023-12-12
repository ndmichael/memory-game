const cards = document.querySelectorAll('.memoryCard');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

// shuffle card function
function cardShuffle(){
    cards.forEach(card =>{
        let randPos = Math.floor(Math.random() * 12);
        card.style.order = randPos;
    })
};

cardShuffle();

var count = 0;
let scores = 0;

// logic to handle trials counter
function counter(count=0){
    const trials = document.querySelector('.trials');
    trials.innerHTML = count;
}

// logic for handling scores
function scoreCount(scores=0){  
    const scoresEle = document.querySelector('.scores');
    scoresEle.innerHTML = scores;

}

flipCard = function(e){
    // lock board until unmatched card flipped back
    // this solve the bug of card flipping.
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip')

    // first flipped
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
    }
    // second flipped
    else{
        // hasFlippedCard = false;
        secondCard = this;
        
        // count increment and counter call
        count++;
        counter(count);
        
        // if its a match
        if(firstCard.dataset.name === secondCard.dataset.name){
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            resetBoard();
            scores++;
            scoreCount(scores);
        }
        // else if its not a match
        // DELAY 1 seconds before flipping back
        else{
            lockBoard = true;
            setTimeout(()=>{
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                resetBoard();
            }, 1000)  ;  
            
        }
        
    }
}

let resetBoard =  function(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

/*
    * call function immediately
    * generate random numbers for card positions
    * assign to flex which auto shuffle order
*/


cards.forEach(card => card.addEventListener('click', flipCard))