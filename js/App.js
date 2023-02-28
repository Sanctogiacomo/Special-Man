const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const formControl = document.getElementsByClassName('form-control');
const errMessage = document.getElementsByClassName('errMessage');


firstname.addEventListener('keydown', ()=>{

  firstname.style.border = '2px solid #2ecc71';
  firstname.style.color = '#2ecc71';
  
})

lastname.addEventListener('keydown', ()=>{
  lastname.style.border = '2px solid #2ecc71';
  lastname.style.color = '#2ecc71';
})

phone.addEventListener('keydown', ()=>{
  phone.style.border = '2px solid #2ecc71';
  phone.style.color = '#2ecc71';
})

email.addEventListener('keydown', ()=>{
  email.style.border = '2px solid #2ecc71';
  email.style.color = '#2ecc71';
})

password.addEventListener('keydown', ()=>{
  password.style.border = '2px solid #2ecc71';
  password.style.color = '#2ecc71';
})


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    
});

function checkInputs(){

    //get values from inputs
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    
    if(firstnameValue === ''){
        //show error & add error class
        setErrorFor(firstname, 'Firstname field is required');
    }
    else{
        //add success class
        setSuccessFor(firstname);
    }


    if(lastnameValue === ''){
      //show error & add error class
      setErrorFor(lastname, 'Lastname field is required');
  }
  else{
      //add success class
      setSuccessFor(lastname);
  }

  if(phoneValue === ''){
    //show error & add error class
    setErrorFor(phone, 'Phone number field is required');
}
else{
    //add success class
    setSuccessFor(phone);
}

    if(emailValue === ''){
        setErrorFor(email, 'Email field is required');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }
    else{
        setSuccessFor(email);
    }



    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    }
    else{
        setSuccessFor(password);
    }


    //last success message
    if(firstnameValue !== '' && lastnameValue !== '' && phoneValue !== '' && emailValue !== ' '
    && passwordValue !== ''){
      alert('Validated Successfully  ✔');
    }


}


function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error msg inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';

}

function setSuccessFor(input){
    //select the div .form-control
    const formControl = input.parentElement;

    //add success class
    formControl.className = 'form-control success';

}


function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


