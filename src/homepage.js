import homepageImg from './homepage.jpg';

export default createHomepage => {
	console.log("Homepage");

	let h1 = document.createElement("h1");
	h1.textContent = "Homepage"

	let img = document.createElement('img');
	img.src = homepageImg;

	let p = document.createElement("p");
	p.textContent = "We're happy to welcome you inside the beautiful yellow restaurant, you're welcome!"

	let container = document.querySelector("#content");
	container.appendChild(h1);
	container.appendChild(img);
	container.appendChild(p);
}