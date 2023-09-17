const addDrop = (event) => {
	const targetClass = event.target.classList[0];
	const dropElements = document.querySelectorAll(`.${targetClass}`);
	// dropdown-item from display none to block
	// className add background color and formatting
	dropElements.forEach((element) => {
		if (element.classList.contains("head-item")) {
			element.parentElement.classList.toggle("dropdown-item-vis");
		} else {
			element.classList.toggle("invis");
			element.classList.toggle("dropdown-item-vis");
		}
	});
};

const dropEventListener = () => {
	const headItems = document.querySelectorAll(".head-item");
	headItems.forEach((item) => item.addEventListener("click", addDrop));
};

export default dropEventListener;

const sideMenuToggle = () => {
	const sideMenu = document.querySelector(".side-menu");
	sideMenu.classList.toggle("invis");
	const sideExitBtn = document.querySelector(".menu-close");
	sideExitBtn.removeEventListener("click", sideMenuToggle);
};

export const sideEventListener = () => {
	const menuBtn = document.querySelector(".mobile-menu-btn");
	const sideExitBtn = document.querySelector(".menu-close");
	const sideMenu = document.querySelector(".side-menu");
	menuBtn.addEventListener("click", () => {
		sideMenu.classList.toggle("invis");
		sideExitBtn.addEventListener("click", sideMenuToggle);
	});
};
