document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    if (username === '' || password === '') {
        errorMsg.textContent = 'Please fill in all fields';
        errorMsg.style.display = 'block';
        return;
    }

    try {
        // Call backend for authentication
        const response = await fetch('http://localhost:5500/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        
        if (response.ok) {
            alert('Login successful!');
            errorMsg.style.display = 'none';
            localStorage.setItem('token', data.token);  // Save token for further requests
        } else {
            errorMsg.textContent = data.message;
            errorMsg.style.display = 'block';
        }
    } catch (error) {
        errorMsg.textContent = 'Error connecting to the server';
        errorMsg.style.display = 'block';
    }
});
