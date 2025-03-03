# Web-Based User Authentication System

  Introduction
This project is a  web-based user authentication system  that enables users to  register, log in, and access protected content**. It is built using  HTML, CSS, and JavaScript  for the frontend and  PHP with MySQL  for the backend. The system ensures secure user authentication with password hashing and session management.

---

  Features

✅  User Registration  – Users can sign up with a username, email, and password.  
✅  User Login  – Secure authentication system.  
✅  Password Encryption  – Passwords are stored securely using bcrypt.  
✅  Session Management  – Users remain logged in until they log out.  
✅  Database Connectivity  – Uses MySQL for user data storage.  
✅  Error Handling  – Displays relevant messages for invalid login attempts or registration errors.  
✅  Responsive UI  – User-friendly design using HTML & CSS.  

---

  Technology Stack

   Frontend 
-  HTML  – Page structure
-  CSS  – Styling
-  JavaScript  – Client-side form validation and interactions

   Backend 
-  PHP  – Handles authentication and database interactions
-  MySQL  – Stores user data securely

   Hosting (Optional)**
-  000WebHost / InfinityFree  – Free hosting
-  Hostinger / GoDaddy  – Paid hosting options

---

  Project Structure

📂  webapp-login/** *(Project Root)*  
├── 📄  index.html  → Login page  
├── 📄  register.html  → Registration page  
├── 📄  dashboard.html  → Protected user dashboard  
├── 📄  style.css  → Styling for all pages  
├── 📄  script.js  → JavaScript for frontend interactions  
├── 📄  register.php  → Handles user registration  
├── 📄  login.php  → Handles user login  
├── 📄  logout.php  → Handles user logout  
├── 📄  config.php  → Database connection file  
└── 📂  database/** → MySQL scripts  

---

  Database Schema (users Table)

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```

---

  How It Works

1️⃣  User visits `register.html`**, enters details, and submits the form.  
2️⃣ The data is sent to **`register.php`**, where it's stored in  MySQL  after password hashing.  
3️⃣ User is redirected to **`index.html` (Login Page)** after successful registration.  
4️⃣  Login process (`login.php`)** verifies credentials and starts a  session**.  
5️⃣ If valid, the user is redirected to **`dashboard.html`**.  
6️⃣  User can log out  anytime via `logout.php`, which destroys the session.  

---

  Installation & Setup

  1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/webapp-login.git
cd webapp-login
```

  2. Setup MySQL Database
- Import the provided SQL file (`database/schema.sql`) into  phpMyAdmin  or MySQL.
- Update `config.php` with your database credentials:

```php
$host = "localhost";
$user = "root";
$password = "";
$database = "your_database_name";

$conn = new mysqli($host, $user, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
```

  3. Start Local Server
If using XAMPP:
- Place the project folder inside the `htdocs/` directory.
- Start  Apache  and  MySQL  from XAMPP.
- Access the app at: `http://localhost/webapp-login/`

---

  Future Enhancements
🚀  Email Verification  – Users must verify their email before activation.  
🚀  Forgot Password Feature  – Password reset via email.  
🚀  Profile Management  – Users can update their details.  
🚀  Two-Factor Authentication (2FA) – Extra security with OTP.  
🚀  Admin Dashboard  – Manage users and authentication.  

---

  License
This project is open-source and free to use under the  MIT License.

---

  Contact & Support
If you have any issues, feel free to open an  issue  in the repository or contact me at **mrmayurmali@gmail.com**.

Happy coding! 🚀

