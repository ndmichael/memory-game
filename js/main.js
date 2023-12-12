const cards = document.querySelectorAll('.memoryCard');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

flipCard = function(e){
    // lock board until unmatched card flipped back
    // this solve the bug of card flipping.
    if(lockBoard) return;

    this.classList.add('flip')

    // first flipped
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
    }
    // second flipped
    else{
        hasFlippedCard = false;
        secondCard = this;
        
        // if its a match
        if(firstCard.dataset.name === secondCard.dataset.name){
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        }
        // else if its not a match
        // DELAY 1 seconds before flipping back
        else{
            lockBoard = true;
            setTimeout(()=>{
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                lockBoard = false;
            }, 1000)  ;  
            
        }
    }
}

cards.forEach(card => card.addEventListener('click', flipCard))