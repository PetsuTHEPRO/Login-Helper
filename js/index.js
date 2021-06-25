function showPassword(){
    const eye = document.getElementById('eye');
    const eyeSlast = document.getElementById('eye-slash');
    const fieldPassword = document.getElementById('field-password');

    if(eye.style.display === 'none'){
        eye.style.display = 'block';
        eyeSlast.style.display = 'none';
        fieldPassword.type = 'text';
    }else{
        eye.style.display = 'none';
        eyeSlast.style.display = 'block';
        fieldPassword.type = 'password';
    }
};

document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    alert('Logado');
});