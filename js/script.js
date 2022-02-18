"use strict";

const box = document.getElementById("box");

console.log(box);

const btns = document.getElementsByTagName("button");
// const btns = document.getElementsByTagName("button")[2];

// Получаем HTML collection псевдомассив
console.log(btns[3]);

const cir = document.getElementsByClassName("circle");
console.log(cir);

const hearts = document.querySelectorAll(".heart");

console.log(hearts);

hearts.forEach((item) => {
  console.log(item);
});

const oneHeart = document.querySelector(".heart");
console.log(oneHeart);
