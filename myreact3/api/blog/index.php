<?php

include_once("../db_config.php");

$rawData = $db->query("SELECT * FROM blogs");

$output = [];
while($data = $rawData->fetch_object()){

    $output[]= $data;
}

// echo "<pre>";
// print_r($output);

echo json_encode($output);


?>