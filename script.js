function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  // Replace these with your desired login credentials
  const validUsername = "your_username";
  const validPassword = "your_password";

  const enteredUsername = usernameInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredUsername === validUsername && enteredPassword === validPassword) {
    alert("Login successful!");
    // Redirect to another page or perform any action after successful login
  } else {
    alert("Invalid username or password. Please try again.");
  }
}
