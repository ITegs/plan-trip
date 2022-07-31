<?php

    $default = "{coord:{lon: 11.7527,lat: 47.7097,},weather:[{id: 804,main: \"Clouds\",description: \"Keine Daten Verfügbar\",icon: \"04d\",},],base: \"stations\",main: {temp: 0,feels_like: 23.81,temp_min: 23.42,temp_max: 24.91,pressure: 1019,humidity: 47,sea_level: 1019,grnd_level: 937,},visibility: 10000,wind: {speed: 2.49,deg: 292,gust: 5.29,},clouds: {all: 94,},dt: 1659263616,sys: {type: 2,id: 2012314,country: \"DE\",sunrise: 1659239309,sunset: 1659293407,},timezone: 7200,id: 2823679,name: \"Tegernsee\",cod: 200,}";

    $currentDate = new DateTime();

    $jsonString = file_get_contents('weather.json');
    $data = json_decode($jsonString, true);

    $locationJson = file_get_contents('location.json');
    $location = json_decode($locationJson, true);

    $start_date = new DateTime($data["timestamp"]);
    $since_start = $start_date->diff($currentDate);
	echo $since_start->i;
    if($since_start->y >= 1 or $since_start->m >= 1 or $since_start->d >= 1 or $since_start->h >= 1 or $since_start->i >= 5 ){
        $xml = file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=".$location[0]."&appid=af6774b7725b239a5c0cd7cda79fa1ad&units=metric&lang=de");
        $decoded = json_decode($xml, true);
        if($decoded != false){
            $data["weather"] = $decoded;
        } else {
            $data["weather"] = $default;
        }
        $data["timestamp"] = $currentDate->format('Y-m-d H:i:s');
    } else {
		echo "already up to date";
	}

    $newJsonString = json_encode($data);
    file_put_contents('weather.json', $newJsonString);
?>