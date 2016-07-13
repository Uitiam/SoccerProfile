<?php
//PDO code sourced by from the PHP documentation website
//http://php.net/docs.php
$dbh = new PDO('mysql:host=localhost;dbname=Soccer-Pro-File', 'comp4900', 'bcitaccess', array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
$selectPlayer = $dbh->prepare('SELECT  PlayerID, FirstName, LastName FROM Player WHERE parentEmail = ?');
$selectPlayer ->execute(array($_GET['email']));
$player = $selectPlayer ->fetchAll(PDO::FETCH_ASSOC);
header('Content-type: application/json');
echo json_encode($player);
?>
