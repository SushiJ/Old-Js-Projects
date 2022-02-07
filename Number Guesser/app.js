// Game values

let min = 1,
  max = 10,
  winingNum = getRandomNum(min, max),
  guessesLeft = 3;

// UIlements

const UIgame = document.querySelector(".game"),
  UIminNum = document.querySelector(".min-num"),
  UImaxNum = document.querySelector(".max-num"),
  UIguessbtn = document.querySelector("#guess-btn"),
  UIguessInput = document.querySelector("#guess-input"),
  UImessage = document.querySelector(".message");

UIminNum.textContent = min;
UImaxNum.textContent = max;

// event listeners
UIguessbtn.addEventListener("click", function () {
  let guess = parseInt(UIguessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Enter a number b/w ${min} and ${max}`, "red");
  }

  if (guess === winingNum) {
    gameOver(true, `${winingNum} is correct, LESZZZ GO`);
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game donzo, you looso. The correct number was ${winingNum}`
      );
    } else {
      UIguessInput.style.borderColor = "red";
      //clearing the input
      UIguessInput.value = "";
      // Guesses left and game is going on
      setMessage(`Guesses left ${guessesLeft}`, "red");
    }
  }
});

UIgame.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  // disabling the input
  UIguessInput.disabled = true;

  // change the color
  UIguessInput.style.borderColor = color;
  UImessage.style.color = color;

  setMessage(msg);

  // Play again
  UIguessbtn.value = "Play Again";
  UIguessbtn.className += "play-again";
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color) {
  UImessage.style.color = color;
  UImessage.textContent = msg;
}
