let password = document.querySelector('#password');
let img = document.querySelector('img');

let num = 400;
let characterChecked = true;
let numChecked = true;
let letterChecked = true;
let lengthChecked = true;

const letter = /[A-Z]/g;
const numbers = /[0-9]/g;
const specialCharacter = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


password.addEventListener('keypress', (e) => {

    if(e.key.match(numbers) && numChecked){
        numChecked = false;
        num = num - 100;
        img.style.filter = `blur(${num}px)`;
        return;

    } 
    if(e.key.match(letter) && letterChecked){
        letterChecked = false;
        num = num - 100;
        img.style.filter = `blur(${num}px)`
        return;
    } 
    if(e.key.match(specialCharacter) && characterChecked) {
        characterChecked = false;
        num = num - 100;
        img.style.filter = `blur(${num}px)`
        return;
    }

    if(password.value.length >= 8 && lengthChecked){
        lengthChecked = false;
        num = num - 100;
        img.style.filter = `blur(${num}px)`
        return;
    } 
    
})