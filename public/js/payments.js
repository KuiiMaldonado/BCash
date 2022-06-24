const addPaymentBtn = document.getElementById('addPaymentBtn');
const updatePaymentBtn = document.getElementById('addPurchaseBtn');

async function addPaymentHandler(event) {
    event.preventDefault();

    const description = document.querySelector('#paymentInput').value;
    const amount = parseFloat(document.querySelector('#amountInput').value);
    const debtorId = parseInt(document.querySelector('#debtorInput').value);
    const listId = 'f72125f6-b636-4180-882e-3a8067b8e80a';

    const response = await fetch('/api/payments/', {
        method: 'POST',
        body: JSON.stringify({description, amount, debtorId, listId}),
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` },
    });

    if (response.ok) {
        alert('New payment added');
        window.location.reload();
    }
}

async function updatePaymentHandler(event) {
    event.preventDefault();

    const paymentId = document.querySelector('#debtorInput').value;

    const response = await fetch('/api/payments/updateStatus', {
        method: 'PUT',
        body: JSON.stringify({paymentId}),
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` },
    });

    if (response.ok) {
        alert('Payment updated');
        window.location.reload();
    }
}

addPaymentBtn.addEventListener('click', addPaymentHandler);
updatePaymentBtn.addEventListener('click', updatePaymentHandler);