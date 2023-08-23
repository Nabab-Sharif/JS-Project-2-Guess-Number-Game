let card1 = document.querySelector('.card1');
let card1username = document.querySelector('.card1username')
let card1_btn = document.querySelector('.card1_btn')


let card2 = document.querySelector('.card2');
let card2Title = document.querySelector('.card2Title')
let card2player_one = document.querySelector('.card2player_one')
let card2_btn = document.querySelector('.card2_btn')
let card2_error = document.querySelector('.card2_error');



let card3 = document.querySelector('.card3');
let card3Title = document.querySelector('.card3Title');
let card3player_two = document.querySelector('.card3player_two');
let card3_btn = document.querySelector('.card3_btn');




let card4 = document.querySelector('.card4')
let card4Title = document.querySelector('.card4Title');
let card4_guessNumber = document.querySelector('.card4_guessNumber');
let card4_btn = document.querySelector('.card4_btn');
let chance = document.querySelector('.chance');



let card5 = document.querySelector('.card5');
let card5Title = document.querySelector('.card5Title');



// for card 1 
card1_btn.addEventListener('click', function () {
  let card1UserName = card1username.value;

  card2.style.display = "block";
  card2Title.innerHTML = card1UserName;
  card1.style.display = "none";

})



// for card 2
card2_btn.addEventListener('click', function () {
  let card2Player_One = card2player_one.value;


  if (card2Player_One <= 10 && card2Player_One >= 1) {
    card2.style.display = "none";
    card3.style.display = "block";
  }
  else {
    card2_error.innerHTML = 'out of range please enter 1 between 10';
  }


})




// for card 3

card3_btn.addEventListener('click', function () {
  let card3Player_Two = card3player_two.value;

  card4Title.innerHTML = card3Player_Two;
  card3.style.display = "none";
  card4.style.display = "block";

})


// for card 4

let count = 3;

card4_btn.addEventListener('click', function () {
  let Card4_GuessNumber = card4_guessNumber.value;
  let Card2player_one = card2player_one.value;


  if (Card2player_one == Card4_GuessNumber) {
    card4.style.display = "none";
    card5.style.display = 'block';
    card5Title.innerHTML = 'Player Two Win'

  }
  else if (count == 0) {
    card4.style.display = "none";
    card5.style.display = 'block';
    card5Title.innerHTML = 'Player One Win'
  } else {
    count--;
  }

  chance.innerHTML = count;


})