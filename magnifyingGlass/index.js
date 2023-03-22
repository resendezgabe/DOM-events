const textEl = document.getElementById("text");
const increaseFontSizeBtn = document.getElementById("increase-font-size");
const decreaseFontSizeBtn = document.getElementById("decrease-font-size");

let fontSize = 16;

increaseFontSizeBtn.addEventListener("click", function() {
  if (fontSize < 100) {
    fontSize += 2;
    textEl.style.fontSize = `${fontSize}px`;
  }
});

decreaseFontSizeBtn.addEventListener("click", function() {
  if (fontSize > 1) {
    fontSize -= 2;
    textEl.style.fontSize = `${fontSize}px`;
  }
});