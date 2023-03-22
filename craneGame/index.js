const crane = document.getElementById("crane");
const upButton = document.getElementById("up");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const downButton = document.getElementById("down");

let cranePosition = { top: 50, left: 50 };

upButton.addEventListener("click", function() {
    cranePosition.top -= 10;
    crane.style.top = "${craneposition.top}%";
});

leftButton.addEventListener("click", function() {
    cranePosition.left -= 10;
    crane.style.left = "${cranePosition.left}%";
});

rightButton.addEventListener("click", function() {
    cranePosition.left += 10;
    crane.style.left = "${cranePosition.left}%";
});

downButton.addEventListener("click", function() {
    cranePosition.top += 10;
    crane.style.top = "${cranePosition.top}%";
});