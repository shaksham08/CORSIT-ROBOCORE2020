const text = ['Coming soon','Club of Robotics','presents','RoboCore','2020','get ready to compete'];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if(count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if(letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 100);
}());