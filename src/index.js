import "./style.css";
import dropEventListener, { sideEventListener } from "./dropdown";
import {
	addArrowListeners,
	importingAll,
	initNav,
	initPhoto,
} from "./image-slider";

importingAll();
initPhoto();
initNav();
addArrowListeners();
dropEventListener();
sideEventListener();
