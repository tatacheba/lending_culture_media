<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
ob_start();



if (!function_exists('curl_version')) {
    echo 'Curl is not installed';
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Required params
    $token = 'MTFJOWRLNWYTZWJMMI00ZDZHLTG1MJUTZJQ0MZA0Y2JHZJA4';
    $stream_code = 'pkdej';

    // Fields to send
    $post_fields = [
        'stream_code' => $stream_code,    // required
        'client'      => [
            'phone' => $_POST['phone'], // required
            'name'  => $_POST['name'],
        ],
        'sub1' => (empty($_POST['sub1'])) ? $_GET['sub1'] : $_POST['sub1'],
        'sub2' => (empty($_POST['sub2'])) ? $_GET['sub2'] : $_POST['sub2'],
        'sub3' => (empty($_POST['sub3'])) ? $_GET['sub3'] : $_POST['sub3'],
        'sub4' => (empty($_POST['sub4'])) ? $_GET['sub4'] : $_POST['sub4'],
        'sub5' => (empty($_POST['sub5'])) ? $_GET['sub5'] : $_POST['sub5'],
    ];

    $headers = [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $token
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://order.drcash.sh/v1/order");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_fields));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_HEADER, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
    $body = substr($response, $header_size);

    curl_close($ch);

    if ($httpcode != 200) {
        echo 'Error: ' . $httpcode . '<br>';
        echo $response;
    } else {
        // Редирект через PHP
        header("Location: thanks/index.html");
        exit;
    }
}
?>
