"use strict";
console.log("calc.js file was loaded");

function changeTitle(text = "document") {
  document.title = text;
  const h1El = document.querySelector("h1");
  h1El.textContent = text;
}
changeTitle("paskaiciuoti");

// sukurti funkcija kuri suskaiciuoja 3 skaiciu vidurki

// function avgThree(sk1, sk2, sk3) {
//   let avg = (sk1 + sk2 + sk3) / 3;
//   console.log("avg ===", avg);
//   return avg;
// }
// let r1 = avgThree(4, 6, 13);
// let r2 = avgThree(5, 4, 2);
// let r3 = avgThree(4, 3, 8);

// let avgsum = r1 + r2 + r3;
// console.log("avgsum ===", avgsum);

function posAvg(sk1, sk2, sk3) {
  sk1 = Math.sqrt(sk1 * sk1);
  sk2 = Math.sqrt(sk2 * sk2);
  sk3 = Math.sqrt(sk3 * sk3);
  let avg = (sk1 + sk2 + sk3) / 3;
  console.log("avg ===", avg.toFixed(0));
  return avg;
}

posAvg(4, -2, 6);

// parasyti funkcija, kuri spausdina skaicius nuo 0 iki 10
// jei sk lygus 7 norim nutruakti funkcijos vykdyma
// let i;
// for (i = 0; i < 11; i++) {
//   //break - nutraukia ciklo vykdyma
//   //continue persoka i srep dali (i++)
//   // patikrinimas
//   if (i === 7) {
//     // break;
//     continue;
//   }
//   console.log("i ===", i);
// }
// console.log("i po ciklo===", i);

function printNums(howMuch) {
  for (let i = 0; i < 11; i++) {
    console.log("i ===", i);
    if (i === howMuch) {
      // break
      return;
    }
  }
}
printNums(4);

function printOnlyPositives(num1) {
  // exit clause
  if (num1 < 0) {
    return;
  }
  console.log(`${num1} is a positive number`);
}
// printOnlyPositives(5);
// printOnlyPositives(-15);
