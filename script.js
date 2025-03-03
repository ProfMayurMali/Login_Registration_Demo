function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `username=${username}&password=${password}`
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("message").innerText = data;
        if (data.includes("successful")) {
            window.location.href = "dashboard.php";
        }
    });
}

function register() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("register.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `username=${username}&email=${email}&password=${password}`
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("message").innerText = data;
        if (data.includes("successful")) {
            window.location.href = "index.html"; // Redirect to login page after successful registration
        }
    });
}

