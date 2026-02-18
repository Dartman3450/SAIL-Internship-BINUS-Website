function register(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirm-password").value;

    if (!username || !email || !password || !confirmPassword) {
        alert("All field is required to fill!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password dont matched!");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("Username already used!");
        return;
    }

    localStorage.setItem(
        username,
        JSON.stringify({ email, password })
    );

    alert("Register sukses!");
    window.location.href = "../Homepage/Homepage.html";
}
