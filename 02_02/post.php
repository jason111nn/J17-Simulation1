<?php
    $dsn = "mysql:host=localhost;charset=utf8;dbname=db02";
    $conn = new PDO($dsn, "admin", "1234");
    $sql = "INSERT INTO `tickets` (`firstname`, `lastname`, `password`, `phone`) 
            VALUES ('{$_POST['firstname']}', '{$_POST['lastname']}', '{$_POST['password']}', '{$_POST['phone']}')";
    $result = $conn->exec($sql);
    echo $result > 0 ? "成功" : "失敗";
?>
    