let password = document.querySelector('#password');
let img = document.querySelector('img');

let numValidation = false;
let letterValidation = false;
let lengthValidation = false;
// let characterValidation = false;
let num = 300;

password.addEventListener('keypress', (e) => {

    const letter = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const specialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    // const specialCharacter = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
    // const specialCharacter = /?=.*[!@#$%^&*]/;

    if(e.key.match(numbers)){
        numValidation = true;
        num = num - 100;
        img.style.filter = `blur(${num-100}px)`;

    } 
    if(e.key.match(letter)){
        letterValidation = true;
        num = num - 100;
        img.style.filter = `blur(${num-100}px)`
    } 
    // if(e.key.match(specialCharacter)) characterValidation = true;
    if(password.value.length >= 8){
        lengthValidation = true;
        num = num - 100;
        img.style.filter = `blur(${num-100}px)`
    } 

    // console.log(characterValidation);

    // if()


})