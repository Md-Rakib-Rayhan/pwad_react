<?php

include_once("../db_config.php");

// echo "Hello";

$data = file_get_contents("php://input");
// print_r($checkIt);
$data = json_decode($data);
// print_r($data);

$title = $data->title;
$details = $data->details;

$sql = "INSERT INTO `blogs`(`title`, `details`) VALUES ('$title','$details')";

if($title != "" && $details != ""){
    $db->query("$sql");
}

if($db->affected_rows){
    echo "Successfully Inserted";
}

?>