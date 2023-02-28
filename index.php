<?php
$mysqli = new mysqli($_ENV['MYSQL_HOST'], $_ENV['MYSQL_USER'], $_ENV['MYSQL_PASSWORD'], $_ENV['MYSQL_DATABASE']);

$catId = (int)$_GET['catId'];

$result = [];
$query = $mysqli->query('
    select q.*, u.name, u.gender 
    from questions q 
        join users u on 
            q.user_id = u.id and 
            q.catalog_id=' . $catId);

while ($response = $query->fetch_assoc()) {
    $result[] = array('question' => $response['q'], 'user' => $response['u']);
}

$query->free();