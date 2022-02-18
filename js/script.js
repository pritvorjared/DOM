"use strict";

const box = document.getElementById("box"); // Через id. Только один на странице
console.log(box);

// const btns = document.getElementsByTagName("button")[1]; // Через тег, теперь мы получаем псевдомассив в котором все теги button
// console.log(btns);
// теперь чтобы получить оприделенный элемент нужно указать его индекс
const btns = document.getElementsByTagName("button");
console.log(btns[2]);
// Если среди искомых тегов будет только один тег, то всеравно это будет псевдомассив но только с одним эллементом

// Через Class. Получаем все эллементы через определенный класс
const circles = document.getElementsByClassName("circle");
console.log(circles);

// Более современные методы получения элементов со страници
// (Во внутрь круглых скобок мы помещаем CSSселектор. Всегда указивается через точку!!!!!)
// в querySelectorAll появляется метод ForEach

const hearts = document.querySelectorAll(".heart");
console.log(hearts);
hearts.forEach((item, i) => {
  console.log(i, item);
});

// Queryselector Получаем только первый элемент на странице
const oneHeart = document.querySelector(".heart");
console.log(oneHeart);

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart"),
  wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";
const num = 25;
box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "black";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "red";
});

const div = document.createElement("div");
// Элемент создан и онсуществует только внутри JS
// const text = document.createTextNode("Тут был я");
// Создан текс и он существует только внутри JS

div.classList.add("black");
// Добавляем стиль под название black

document.body.append(div);
document.querySelector(".wrapper").append(div);

// wrapper.append(div)
// wrapper.appendChild(div);

// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// один эллемент заменить другим, сначала указываем какой элемент, а потом на какой
// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

// Устаревшие конструкции которые мы можем встретить

div.innerHTML = "<h1>Hello world</h1>";
// div.textContent = "Hellos";
div.insertAdjacentHTML("afterend", "<h2>hell</h2>");
