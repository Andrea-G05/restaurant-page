import createHomepage from "./homepage.js";
import createMenu from "./menu.js";
import createContacs from "./contacts.js";

let clearContent = () => {
	let container = document.querySelector("#content");
	while(container.hasChildNodes()){
		container.removeChild(container.lastChild);
	}
}

document.querySelector("#homepage").addEventListener("click", () => {
	clearContent(); createHomepage()});
document.querySelector("#menu").addEventListener("click",  () => {
	clearContent();createMenu()});
document.querySelector("#contacts").addEventListener("click",  () => {
	clearContent(); createContacs()});