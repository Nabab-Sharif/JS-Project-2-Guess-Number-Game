let card1 = document.querySelector('.card1');
let card1username = document.querySelector('.card1username')
let card1_btn = document.querySelector('.card1_btn')
let card1_error = document.querySelector('.card1_error');



let card2 = document.querySelector('.card2');
let card2Title = document.querySelector('.card2Title')
let card2player_one = document.querySelector('.card2player_one')
let card2_btn = document.querySelector('.card2_btn')
let card2_error = document.querySelector('.card2_error');



let card3 = document.querySelector('.card3');
let card3Title = document.querySelector('.card3Title');
let card3player_two = document.querySelector('.card3player_two');
let card3_btn = document.querySelector('.card3_btn');
let card3_error = document.querySelector('.card3_error');



let card4 = document.querySelector('.card4')
let card4Title = document.querySelector('.card4Title');
let card4_guessNumber = document.querySelector('.card4_guessNumber');
let card4_btn = document.querySelector('.card4_btn');
let chance = document.querySelector('.chance');



let card5 = document.querySelector('.card5');
let card5Title = document.querySelector('.card5Title');



// for card 1 
//...............Start Card 1......................................
card1_btn.addEventListener('click', function () {

  if (card1username.value == "") {
    card1_error.innerHTML = 'there is no input please enter the input'
  } else {
    card1_error.innerHTML = "";
    card2.style.display = "flex";
    card1.style.display = "none";
    card2Title.innerHTML = card1username.value;
  }

})
//.................End Card 1......................................




//...............Start Card 2......................................
card2_btn.addEventListener('click', function () {

  if (card2player_one.value > 0 && card2player_one.value <= 10) {
    card2.style.display = "none";
    card3.style.display = "flex";
    card2_error.innerHTML = "";
  }
  else {
    card2_error.innerHTML = 'out of range please enter 1 between 10';
  }

})
//...............End Card 2........................................





//...............Start Card 3......................................
card3_btn.addEventListener('click', function () {
  if (card3player_two.value == "") {
    card3_error.innerHTML = 'there is no input please enter the input'
  }
  else {
    card3_error.innerHTML = ""
    card3.style.display = "none";
    card4.style.display = "flex";
    card4Title.innerHTML = card3player_two.value;
  }

})
//...............End Card 3........................................







//...............Start Card 4......................................

let count = 5;

card4_btn.addEventListener('click', function () {

  if (card2player_one.value == card4_guessNumber.value) {
    card4.style.display = "none";
    card5.style.display = 'flex';
    card5Title.innerHTML = `player ${card3player_two.value} win`;
    chance.innerHTML = ""
  }
  else {
    count--;
    chance.innerHTML = count;
    if (count == 0) {
      card5Title.innerHTML = `player ${card1username.value} win / right number is =${card2player_one.value}`;
      card4.style.display = "none";
      card5.style.display = 'flex';
    }
  }

})

//...............End Card 4........................................
