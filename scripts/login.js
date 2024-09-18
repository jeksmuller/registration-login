// select form by id
const loginForm = document.querySelector('#login-form');
// Handle form submit event
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect form data
    const loginData = new FormData(event.target);
    console.log(
        loginData.get('username'),
        loginData.get('password')
    );
    // display success message
    const messageH1 = document.querySelector('#success')
    messageH1.textContent = 'Voila there you go!';
});