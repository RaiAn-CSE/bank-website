
document.getElementById('submitBtn').addEventListener('click', function () {
    const emailField = document.getElementById('userEmail');
    const email = emailField.value;

    const passField = document.getElementById('userPassword');
    const pass = passField.value;

    if (email === 'raian@gmail.com' && pass === '120131') {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid user');
    }

})