function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
 
  const userData = localStorage.getItem(username);

  if (!userData) {
    alert("Login Failed!");
}

  const parsedData = JSON.parse(userData);

if (parsedData.password === password) {
    alert("Login success!");

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", username);

    window.location.href = "../Dashboard/Dashboard.html";
  } else {
    alert("Username or Password is wrong!");
  }
}