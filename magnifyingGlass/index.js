const textEl = document.getElementById("text");
const increaseFontSizeBtn = document.getElementById("increase-font-size");
const decreaseFontSizeBtn = document.getElementById("decrease-font-size");

//defines value of fontSize
let fontSize = 16;

//increases the font size of the text when button is clicked
increaseFontSizeBtn.addEventListener("click", function() {
  if (fontSize < 100) {
    fontSize += 2;
    textEl.style.fontSize = `${fontSize}px`;
  }
});

//decreases the font size of text when button is clicked
decreaseFontSizeBtn.addEventListener("click", function() {
  if (fontSize > 1) {
    fontSize -= 2;
    textEl.style.fontSize = `${fontSize}px`;
  }
});