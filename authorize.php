<?php

$username = $_POST['username'];
$password = $_POST['password'];

if ($username == "talmidim" && $password == "zobin123") {
    header("Location: https://kriah.com/user.html", true, 301);
    exit();
} else {
    header("Location: https://kriah.com/index.html", true, 301);
    exit();
}

?>