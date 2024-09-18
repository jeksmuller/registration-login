// select form by id
const registerForm = document.querySelector('#register-form');
// Handle form submit event
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect form data
    const formData = new FormData(event.target);
    console.log(
        formData.get('username'),
        formData.get('email'),
        formData.get('password')
    );
    // Save user information
    // Send confirmation email
    // display success message
    const messageH1 = document.querySelector('#message')
    messageH1.textContent = 'There You Go!';
});

// Age variable
const age = 44;
// Square of Age
function squareAge(age) {
    const squaredAge = age ** 2;
    return squaredAge;
}
const squaredAge = squareAge(45)


// function to get full name
function fullName(firstName, lastName) {
    // return firstName + lastName;
    return `${firstName} ${lastName}`;
}

const myFullName = fullName('Jacob', 'Dotsey')
