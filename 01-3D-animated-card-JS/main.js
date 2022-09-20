const card = document.querySelector(".card");
const container = document.querySelector(".container");

// items handler
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase button");

card.addEventListener("mousemove", (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 5;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 5;
	card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});

// animate IN
container.addEventListener("mouseenter", (e) => {
	card.style.transition = "none";
	// popout
	title.style.transform = "translateZ(100px)";
	sneaker.style.transform = "translateZ(100px) rotateZ(-45deg)";
	description.style.transform = "translateZ(125px)";
	sizes.style.transform = "translateZ(100px)";
	purchase.style.transform = "translateZ(100px)";
});

// adnimate OUT
container.addEventListener("mouseleave", (e) => {
	card.style.transition = "all 0.5s ease";
	card.style.transform = `rotate(0deg) rotate(0deg)`;
	// Popback
	title.style.transform = "translateZ(0px)";
	sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
	description.style.transform = "translateZ(0px)";
	sizes.style.transform = "translateZ(0px)";
	purchase.style.transform = "translateZ(100px)";
});
