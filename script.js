let password = document.querySelector('#password');
let img = document.querySelector('img');

// let characterValidation = false;
let num = 600;
let numChecked = true;
let letterChecked = true;
let lengthChecked = true;

const letter = /[A-Z]/g;
const numbers = /[0-9]/g;
const specialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


password.addEventListener('keypress', (e) => {
    // const specialCharacter = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
    // const specialCharacter = /?=.*[!@#$%^&*]/;

    if(e.key.match(numbers) && numChecked){
        numChecked = false;
        num = num - 200;
        numValidation = true;
        img.style.filter = `blur(${num}px)`;
        return;

    } 
    if(e.key.match(letter) && letterChecked){
        letterChecked = false;
        num = num - 200;
        letterValidation = true;
        img.style.filter = `blur(${num}px)`
        return
    } 
    // if(e.key.match(specialCharacter)) characterValidation = true;
    if(password.value.length >= 8 && lengthChecked){
        lengthChecked = false;
        num = num - 200;
        lengthValidation = true;
        img.style.filter = `blur(${num}px)`
        return
    } 

    // console.log(characterValidation);

    // if()


})