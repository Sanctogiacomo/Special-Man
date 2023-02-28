let pass = document.getElementById('password');
let showButton = document.getElementById('show');
let hideButton = document.getElementById('hide');

hideButton.addEventListener('click', (e)  => {
    if(pass.type === 'password'){
    pass.type = 'text';
    hideButton.style.display = 'none';
    showButton.style.display = 'block';
    }
});

showButton.addEventListener('click', (e)  => {
    if(pass.type === 'text'){
    pass.type = 'password';
    hideButton.style.display = 'block';
    showButton.style.display = 'none';
    }
});

