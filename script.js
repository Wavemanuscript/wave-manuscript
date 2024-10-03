function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    
    // Registration logic goes here
    document.getElementById('register-feedback').innerText = `Registered: ${username}`;
    document.getElementById('register-form').reset();
}

function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    // Login logic goes here
    document.getElementById('login-feedback').innerText = `Logged in: ${username}`;
    document.getElementById('login-form').reset();
}

function submitBook(event) {
    event.preventDefault();
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const description = document.getElementById('book-description').value;
    const file = document.getElementById('book-file').files[0];
    
    // Submission logic goes here
    document.getElementById('submission-feedback').innerText = `Submitted: ${title} by ${author}`;
    document.getElementById('submission-form').reset();
}

function enterContest() {
    // Contest entry logic goes here
    alert("You have entered the contest!");
}

function purchaseBook() {
    // Book purchase logic goes here
    alert("Book purchased!");
}
