const color = ["green", "red", "blue", "yellow", "pink"];

const btn = document.querySelector("#btn");
const container = document.querySelector(".container");
const h1 = document.querySelector("h1")
const box = document.querySelector(".box");

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * color.length);
    container.style.backgroundColor = color[random];
    h1.textContent = ("color : ")+color[random]

});
