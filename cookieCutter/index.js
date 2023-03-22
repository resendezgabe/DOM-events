let counter = 0;
const counterElement = document.getElementById("counter");
const cookieElement = document.getElementById("cookie");

cookieElement.addEventListener("click", function() {
	counter++;
	counterElement.textContent = counter;
});