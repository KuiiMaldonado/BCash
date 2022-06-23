// Add front end JavaScript here

const homeBtn = document.querySelector('#homeBtn');
const dashBtn = document.querySelector('#dashBtn');

homeBtn.addEventListener('click', () => {
    console.log('Home button')
});

dashBtn.addEventListener('click', () => {
    console.log('Dashboard button')
    window.location.href = "http://localhost:3001/test";
});