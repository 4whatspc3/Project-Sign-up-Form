function checkPassword() {

    const password = document.querySelector('#user_password').value;
    const confirmPassword = document.querySelector('#confirm_password').value;
    if (password !== confirmPassword) {
        document.querySelector('.warning').style.color = 'red';
        document.querySelector('.warning').textContent = '☒ Passwords do not match';
        document.querySelector('button').disabled = true;
        document.querySelector('button').style.opacity = (0.4);
    } else {
        document.querySelector('.warning').style.color = 'green';
        document.querySelector('.warning').textContent = '🗹 Password Matched';
        document.querySelector('button').disabled = false;
        document.querySelector('button').style.opacity = (1);
    }
}

const confirmPassword = document.querySelector('#confirm_password');

confirmPassword.addEventListener('keyup', () => {
    checkPassword();
});