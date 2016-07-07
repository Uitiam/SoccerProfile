<?php
//PDO code sourced by from the PHP documentation website
//http://php.net/docs.php
$dbh = new PDO('mysql:host=localhost;dbname=Soccer-Pro-File', 'comp4900', 'bcitaccess', array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));

$selectPlayerInfo = $dbh->prepare('SELECT  * FROM Player WHERE PlayerID = ?');
$selectPlayerInfo ->execute(array($_POST['playerID']));
$playerInfo = $selectPlayerInfo ->fetchAll(PDO::FETCH_ASSOC);

$selectPlayerCV = $dbh->prepare('SELECT  * FROM Report WHERE PlayerID = ?');
$selectPlayerCV ->execute(array($_POST['playerID']));
$playerCV = $selectPlayerCV ->fetchAll(PDO::FETCH_ASSOC);

$player= array_merge($playerInfo, $playerCV);

header('Content-type: application/json');
echo json_encode($player);
?>
