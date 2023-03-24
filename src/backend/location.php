
<?php
    $location = $_GET["loc"];
    
    $jsonString = file_get_contents('location.json');
    $data = json_decode($jsonString, true);

    $data[0] = $location;

    $newJsonString = json_encode($data);
    file_put_contents('location.json', $newJsonString);

?>