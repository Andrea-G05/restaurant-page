(()=>{"use strict";let e=()=>{let e=document.querySelector("#content");for(;e.hasChildNodes();)e.removeChild(e.lastChild)};document.querySelector("#homepage").addEventListener("click",(()=>{e(),(e=>{console.log("Homepage");let t=document.createElement("h1");t.textContent="Homepage";let n=document.createElement("p");n.textContent="We're happy to welcome you inside the beautiful yellow restaurant, you're welcome!";let o=document.querySelector("#content");o.appendChild(t),o.appendChild(n)})()})),document.querySelector("#menu").addEventListener("click",(()=>{e(),(e=>{let t=document.createElement("h1");t.textContent="Menu";let n=document.createElement("p");n.textContent="We hope our menu will be to your liking";let o=document.querySelector("#content");o.appendChild(t),o.appendChild(n)})()})),document.querySelector("#contacts").addEventListener("click",(()=>{e(),(e=>{let t=document.createElement("h1");t.textContent="Contacts";let n=document.createElement("p");n.textContent="If you need anything, you can call one of the following number. Our staff is ready to help you 24/7";let o=document.querySelector("#content");o.appendChild(t),o.appendChild(n)})()}))})();