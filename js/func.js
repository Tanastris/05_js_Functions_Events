"use strict";
console.log("func.js file was loaded");

const tema = "Funkcijos ir Events";

document.title = tema;
const h1El = document.querySelector("h1");
h1El.textContent = tema;

// Functions

/*
function pavadinimas(param) {
  function body - vykdomas kai iskviesim funkcija

 */
// deklaruojam funkcija - kazkuo panasu i kintamojo deklaravima
// deklaruojant funkcija nevykdoma, tik isimenama
function sayHi(userName = "random person") {
  console.log(`Hello world from: ${userName}`);
}

sayHi("James");
sayHi("Mike");
sayHi();
sayHi();

// sukurti funkcija sumn() turetu sudeti 2 skaicius ir atspausdinti rezultata
//paduoti skaicius kaip argumentus iskvieciant sum(5,10)

function sum(vienas, du) {
  const suma = vienas + du;
  console.log("suma ===", suma);
  return suma;
}
let rez1 = sum(6, 3);
let rez2 = sum(4, 14);
// atspausdinti ka grazina sityu sumu suma
sum(rez1, rez2);

function changeTitle(text = "document") {
  document.title = text;
  const h1El = document.querySelector("h1");
  h1El.textContent = text;
}
changeTitle("namu darbai");
