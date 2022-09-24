const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input an error message
 function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control forbidden ';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// show allowing outline 
showSuccess = (input)=>{
    const formControl = input.parentElement;
    formControl.className = 'form-control allow';
}
// the validation of email
function checkEamil(input){
    const val =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(val.test(input.value.trim())){
        showSuccess(input);
    }else {
        showError(input, 'Email is invalid')
    }
}
//Check require fields
checkRequired = (inArr)=>{
    inArr.forEach((input)=>{
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)}required field`);
        }else{
            showSuccess(input);
        }
    });
}
//Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
      showError(
        input,
        `${getFieldName(input)} must be at least ${min} characters`
      );
}else if (input.value.length > max){
    showError(input, `${getFieldName(input)} 
    must be less then $s{max} characters`);
}else{
    showSuccess(input);
}
}
//Ceck password if are same
checkpassword = (enter1, enter2)=>{
    if(enter1.value.trim() !== enter2.value.trim()){
        showError(enter2, 'Your passwords are not same')
    }
}
getFieldName =(input)=>{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}
// main function
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEamil(email);
    checkpassword(password, password2);
});


// // username
//     if(username.value === ''){
//         showError(username, 'username is require');
//     }else{
//         showSuccess(username);
//     }
//     // email
//     if(email.value === ''){
//         showError(email, 'email is require');
//     }else if (!isValidEmail(email.value)){
//         //console.log(email);
//         showError(email, 'email is invalid')
//     }
//     else{
//         showSuccess(email);
//     }
//     //password
//     if(password.value === ''){
//         showError(password, 'password is require');
//     }else{
//         showSuccess(password);
//     }
//     //confirm password
//     if(password2.value === ''){
//         showError(password2, '');
//     }else{
//         showSuccess(password2);
//     }
