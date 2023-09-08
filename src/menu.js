export default createMenu => {
	let h1 = document.createElement("h1");
	h1.textContent = "Menu"

	let p = document.createElement("p");
	p.textContent = "We hope our menu will be to your liking"

	let container = document.querySelector("#content");
	container.appendChild(h1);
	container.appendChild(p);
}