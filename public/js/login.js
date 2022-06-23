const loginBtn = document.getElementById('loginAccBtn');
const signupBtn = document.getElementById('signUpAccBtn');

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#Input1').value.trim();
    const password = document.querySelector('#Input2').value.trim();

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: { 'Content-Type': 'application/json' },
    });

    const responseData = await response.json();
    if (response.ok) {
        localStorage.setItem('accessToken', responseData.accessToken);
        window.location.replace('/userInfo');
    }
    else {
        alert(responseData.message);
    }
}

async function signUpFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#Input1').value.trim();
    const password = document.querySelector('#Input2').value.trim();
    const username = document.querySelector('#Input3').value.trim();

    const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({username, email, password}),
        headers: { 'Content-Type': 'application/json' },
    });

    const responseData = await response.json();
    if (response.ok) {
        window.location.replace('/login');
    }
    else {
        alert('An error ocurred. Please, try again');
    }
}

loginBtn.addEventListener('click', loginFormHandler);
signupBtn.addEventListener('click', signUpFormHandler);