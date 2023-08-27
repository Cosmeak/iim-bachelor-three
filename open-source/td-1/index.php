<?php 

$client = new \GuzzleHttp\Client();
$response = $client->request('GET', 'https://packagist.org/statistics.json');

dump($response);
