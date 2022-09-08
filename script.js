let password = document.querySelector('#password');
let img = document.querySelector('img');

let numValidation = false;
let letterValidation = false;
let lengthValidation = false;
// let characterValidation = false;

password.addEventListener('keypress', (e) => {

    const letter = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const specialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    // const specialCharacter = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
    // const specialCharacter = /?=.*[!@#$%^&*]/;

    if(e.key.match(numbers)){
        numValidation = true;
        img.style.filter = "blur(200px)";

    } 
    if(e.key.match(letter)){
        letterValidation = true;
        img.style.filter = "blur(100px)"
    } 
    // if(e.key.match(specialCharacter)) characterValidation = true;
    if(password.value.length >= 8){
        lengthValidation = true;
        img.style.filter = "blur(0px)"
    } 

    // console.log(characterValidation);

    // if()


})