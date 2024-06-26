async function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');
    try {
        const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.ok) {
            messageElement.textContent = `Registration successful`;
        } else {
            messageElement.textContent = `Registration failed: ${data}`;
        }
    } catch (error) {
        messageElement.textContent = `Error: ${error.message}`;
    }
}

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');
    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            messageElement.textContent = `Login successful: ${data.token}`;
            // Redirigir a la página protegida
            window.location.href = 'protected.html';
        } else {
            messageElement.textContent = `Login failed: ${data}`;
        }
    } catch (error) {
        messageElement.textContent = `Error: ${error.message}`;
    }
}

async function getProtected() {
    const messageElement = document.getElementById('message');
    const token = localStorage.getItem('token');
    try {
        const response = await fetch('http://localhost:3000/auth/protected', {
            method: 'GET',
            headers: {
                'x-access-token': token,
            },
        });
        const data = await response.text();
        if (response.ok) {
            messageElement.textContent = `Protected data: ${data}`;
        } else {
            messageElement.textContent = `Access denied: ${data}`;
        }
    } catch (error) {
        messageElement.textContent = `Error: ${error.message}`;
    }
}
