<?php

//PDO code sourced by from the PHP documentation website
//http://php.net/docs.php
$dbh = new PDO('mysql:host=localhost;dbname=Soccer-Pro-File', 'comp4900', 'bcitaccess', array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));

$sql = "INSERT INTO `Soccer-Pro-File`.`Report` (`PlayerID`, `eventType`, `eventName`, `date`, `information`, `eventCity`, `eventCountry`) VALUES (?, ?, ?, ?, ?, ?, ?);";

$selectPlayerInfo = $dbh->prepare($sql);

try {
	$selectPlayerInfo ->execute(array($_POST['PlayerID'], $_POST['eventType'], $_POST['eventName'], $_POST['date'], $_POST['information'], $_POST['eventCity'], $_POST['eventCountry']));
} catch(Exception $e) {
	echo $e->getMessage();
}

echo "asdf";
?>