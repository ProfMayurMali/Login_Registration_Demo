<?php
$host = "localhost";
$user = "root"; // Default MySQL user
$password = ""; // Leave empty if no password is set
$database = "user_database";

// Create connection
$conn = new mysqli($host, $user, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
