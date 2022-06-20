// Add front end JavaScript here

const homeBtn = document.querySelector('#homeBtn');
const dashBtn = document.querySelector('#dashBtn');
const loginBtn = document.querySelector('#loginBtn');
const signupBtn = document.querySelector('#signupBtn');

homeBtn.addEventListener('click', () => {
    console.log('Home button')
});

dashBtn.addEventListener('click', () => {
    console.log('Dashboard button')
});

loginBtn.addEventListener('click', () => {
    console.log('Login button')
});

signupBtn.addEventListener('click', () => {
    console.log('Sign up button')
})