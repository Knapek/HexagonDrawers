<?php

declare(strict_types=1);
require_once('Drawer.php');

$jedynka = new Drawer();

$jedynka->addItem('srubka', 4);
$jedynka->addItem('nakretka', 10);
var_dump($jedynka);

$jedynka->presentInside();