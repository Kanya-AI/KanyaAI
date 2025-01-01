<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - Personal Website</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: #f9f9f9;
      font-family: Arial, sans-serif;
    }

    .container {
      background: #fff;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      width: 100%;
      max-width: 400px;
    }

    .container input, .container button {
      margin-bottom: 1rem;
      padding: 0.8rem;
      border-radius: 8px;
      border: 1px solid #ccc;
      font-size: 1rem;
      width: 100%;
    }

    .container button {
      background: #0078d4;
      color: #fff;
      cursor: pointer;
      transition: background 0.3s;
    }

    .container button:hover {
      background: #005bb5;
    }

    .forgot-password {
      font-size: 0.9rem;
      color: #0078d4;
      text-decoration: none;
      cursor: pointer;
    }

    .forgot-password:hover {
      text-decoration: underline;
    }

    .forgot-password-section, .signup-section {
      display: none;
      margin-top: 2rem;
    }

    .return-button {
      margin-top: 1rem;
      background: #ff5e5e;
      color: #fff;
      border: none;
      padding: 0.8rem;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .return-button:hover {
      background: #ff4040;
    }

    .message {
      margin-top: 1rem;
      font-size: 1rem;
      display: none;
    }

    .message.error {
      color: red;
    }

    .message.success {
      color: green;
    }

    .program-name {
      font-size: 2rem;
      font-weight: bold;
      color: #ff6347;
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .buttons-container {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }

    .container input, .container button {
      width: 48%;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="program-name">Kanya</div>

    <h1>Login to Meet Your Friend Kanya</h1>

    <div id="login-section">
      <form id="login-form">
        <input type="text" id="username" placeholder="Enter Username" required>
        <input type="password" id="password" placeholder="Enter Password" required>
        <div class="buttons-container">
          <button type="submit">Login</button>
          <button type="button" id="signup-btn">Sign Up</button>
        </div>
      </form>
      <div id="login-message" class="message"></div>
      <a class="forgot-password" id="forgot-password-btn">Forgot Password?</a>
    </div>

    <div id="signup-section" class="signup-section">
      <h1>Sign Up</h1>
      <form id="signup-form">
        <input type="text" id="new-username" placeholder="Enter New Username" required>
        <input type="password" id="new-password" placeholder="Enter New Password" required>
        <button type="submit">Sign Up</button>
      </form>
      <div id="signup-message" class="message"></div>
      <button class="return-button" id="return-to-login">Back to Login</button>
    </div>

    <div id="forgot-password-section" class="forgot-password-section">
      <h2>Forgot Password</h2>
      <form id="forgot-form">
        <input type="text" id="unique-code" placeholder="Enter Unique Code" required>
        <button type="submit">Submit</button>
      </form>
      <div id="forgot-message" class="message"></div>
      <button class="return-button" id="return-from-forgot">Return to Login</button>
    </div>
  </div>

  <script>
    // Get all necessary elements
    const loginSection = document.getElementById("login-section");
    const forgotSection = document.getElementById("forgot-password-section");
    const signupSection = document.getElementById("signup-section");
    const forgotPasswordBtn = document.getElementById("forgot-password-btn");
    const returnFromForgot = document.getElementById("return-from-forgot");
    const returnToLogin = document.getElementById("return-to-login");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const forgotForm = document.getElementById("forgot-form");
    const loginMessage = document.getElementById("login-message");
    const signupMessage = document.getElementById("signup-message");
    const forgotMessage = document.getElementById("forgot-message");
    const signupBtn = document.getElementById("signup-btn");

    // Login functionality
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = storedUsers.find(u => u.username === username && u.password === password);

      if (user) {
        loginMessage.className = "message success";
        loginMessage.innerText = "Login Successful! Redirecting...";
        setTimeout(() => {
          // Redirect to the home page (bhelpuri1.html)
          window.location.href = "3 Home page.html";
        }, 2000);
      } else {
        loginMessage.className = "message error";
        loginMessage.innerText = "Invalid Username or Password. Please try again.";
      }

      loginMessage.style.display = "block";
    });

    // Signup functionality
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newUsername = document.getElementById("new-username").value;
      const newPassword = document.getElementById("new-password").value;

      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = storedUsers.find(u => u.username === newUsername);

      if (userExists) {
        signupMessage.className = "message error";
        signupMessage.innerText = "Username already exists! Please choose a different one.";
      } else {
        storedUsers.push({ username: newUsername, password: newPassword });
        localStorage.setItem("users", JSON.stringify(storedUsers));
        signupMessage.className = "message success";
        signupMessage.innerText = "Sign Up Successful! Returning to login...";
        setTimeout(() => {
          signupSection.style.display = "none";
          loginSection.style.display = "block";
        }, 2000);
      }

      signupMessage.style.display = "block";
    });

    // Forgot Password functionality
    forgotForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const uniqueCode = document.getElementById("unique-code").value;
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate().toString().padStart(2, "0")}${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}${currentDate.getFullYear()}`;

      if (uniqueCode === formattedDate) {
        forgotMessage.className = "message success";
        forgotMessage.innerText = "Correct Code! Default Username: G | Password: 1";
      } else {
        forgotMessage.className = "message error";
        forgotMessage.innerText = "Incorrect Code! Please try again.";
      }

      forgotMessage.style.display = "block";
    });

    // Show/Hide sections for Forgot Password and Sign Up
    forgotPasswordBtn.addEventListener("click", () => {
      loginSection.style.display = "none";
      forgotSection.style.display = "block";
    });

    returnFromForgot.addEventListener("click", () => {
      forgotSection.style.display = "none";
      loginSection.style.display = "block";
    });

    signupBtn.addEventListener("click", () => {
      loginSection.style.display = "none";
      signupSection.style.display = "block";
    });

    returnToLogin.addEventListener("click", () => {
      signupSection.style.display = "none";
      loginSection.style.display = "block";
    });
  </script>
</body>
</html>
