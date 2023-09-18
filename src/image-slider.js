/* eslint-disable prefer-destructuring */
function importAll(r) {
	return r.keys().map(r);
}

export const importingAll = () => {
	importAll(require.context("./img", false, /\.(png|jpe?g|svg)$/));
};

const imageArray = [
	"./img/pexels-eberhard-grossgasteiger-1612351",
	"./img/pexels-kelly-2510067",
	"./img/pexels-tobi-463734",
	"./img/pexels-tobias-bjørkli-2360673",
];

let selectedImage = 0;

export const initPhoto = () => {
	const sliderContent = document.querySelector(".slider-content");
	sliderContent.innerHTML = "";
	const img = document.createElement("img");
	img.src = imageArray[selectedImage];
	img.alt = "Image of house";

	sliderContent.appendChild(img);
};

const navButtonClick = (event) => {
	selectedImage = event.target.id;
	initPhoto();
	initNav();
};

export const initNav = () => {
	const navContent = document.querySelector(".slider-nav");
	navContent.innerHTML = "";
	for (let x = 0; x < imageArray.length; x++) {
		const newNavButton = document.createElement("div");
		newNavButton.classList.add("slide-nav-button");
		newNavButton.setAttribute("id", x);
		newNavButton.addEventListener("click", navButtonClick);
		navContent.appendChild(newNavButton);
		if (selectedImage == x) {
			newNavButton.classList.add("nav-invis");
		} else {
			newNavButton.classList.add("nav-vis");
		}
	}
};

const arrowEvent = (event) => {
	if (
		event.target.classList.contains("slide-right") &&
		selectedImage < imageArray.length
	) {
		selectedImage += 1;
		if (selectedImage > imageArray.length - 1) {
			selectedImage = 0;
		}
	}
	if (event.target.classList.contains("slide-left") && selectedImage >= 0) {
		selectedImage -= 1;
		if (selectedImage < 0) {
			selectedImage = 3;
		}
	}
	initPhoto();
	initNav();
};

export const addArrowListeners = () => {
	const arrowElements = document.querySelectorAll("button");
	arrowElements.forEach((element) =>
		element.addEventListener("click", arrowEvent),
	);
};

export const initTimer = () => {
	setInterval(() => {
		if (selectedImage < imageArray.length) {
			selectedImage += 1;
			if (selectedImage > imageArray.length - 1) {
				selectedImage = 0;
			}
		}
		initNav();
		initPhoto();
	}, 5000);
};
