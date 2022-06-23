const addListBtn = document.getElementById('addListBtn');

async function addListHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#Input').value;

    const response = await fetch('/api/lists', {
        method: 'POST',
        body: JSON.stringify({title}),
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` },
    });

    if (response.ok) {
        alert('New list added');
        window.location.reload();
    }
}

addListBtn.addEventListener('click', addListHandler);