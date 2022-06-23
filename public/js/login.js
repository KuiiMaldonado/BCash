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
        window.location.replace('/');
    }
    else {
        alert(responseData.message);
    }
}

loginBtn.addEventListener('click', loginFormHandler);