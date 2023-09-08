import contactsImg from './contacts.jpg';

export default createContacts => {
	let h1 = document.createElement("h1");
	h1.textContent = "Contacts"

	let img = document.createElement('img');
	img.src = contactsImg;

	let p = document.createElement("p");
	p.textContent = "If you need anything, you can call one of the following number. Our staff is ready to help you 24/7"

	let container = document.querySelector("#content");
	container.appendChild(h1);
	container.appendChild(img);
	container.appendChild(p);
}