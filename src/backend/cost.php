<?php
        $array = json_decode($_GET["i"], true);
    
        $jsonString = file_get_contents('cost.json');
        $data = json_decode($jsonString, true);
    
        $data = $array;
    
        $newJsonString = json_encode($data);
        file_put_contents('cost.json', $newJsonString);
?>