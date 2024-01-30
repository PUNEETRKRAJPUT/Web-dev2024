let button =document.createElement("button");
let input=document.createElement("input");

button.innerText="click me !";
input.placeholder="write what you want";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// ans2

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

let btn =document.querySelector("#btn");
btn.classList.add("btnstyle");
let h1=document.createElement("h1");
h1.innerHTML="<u> DOM PRACTICE </ul>";
document.querySelector("body").prepend(h1);

h1.classList.add("h1color");

let p = document.createElement("p");
p.innerHTML="apna college <b> delta</b> batch";
document.querySelector("body").append(p);