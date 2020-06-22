import "../scss/main.scss";

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const numberElement = document.querySelector(".glass-counter__number--js");
const incrementButtonElement = document.querySelector(".button-increment--js");
const decrementButtonElement = document.querySelector(".button-decrement--js");

function getCounterKey() {
  const key = new Date().toISOString().slice(0, 10);
  console.log(key);
  return key;
}

function setNumberInCup(number) {
    numberElement.innerHTML = number;
}

function initApp(){
    const localStorageKey = getCounterKey();
    let numebrInStorage = localStorage.getItem(localStorageKey);
    if(numebrInStorage == null){
        numebrInStorage = 0
    }
    localStorage.setItem(localStorageKey, numebrInStorage);
    setNumberInCup(numebrInStorage);
} 

initApp();

incrementButtonElement.addEventListener("click", function () {
    const localStorageKey = getCounterKey();
    let numebrInStorage = localStorage.getItem(localStorageKey);
    numebrInStorage++;
    localStorage.setItem(localStorageKey, numebrInStorage);
    setNumberInCup(numebrInStorage);
  }, false
);

decrementButtonElement.addEventListener("click", function () {
    const localStorageKey = getCounterKey();
    let numberInStorage = localStorage.getItem(localStorageKey);
    console.log(numberInStorage-1 >= 0);
    console.log(numberInStorage);
    if(numberInStorage-1 >= 0){
        numberInStorage--
    }
    localStorage.setItem(localStorageKey, numberInStorage);
    setNumberInCup(numberInStorage);
}, false);
