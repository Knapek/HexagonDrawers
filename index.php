<?php

declare(strict_types=1);
require_once('Drawer.php');

$jedynka = new Drawer();

$jedynka->addItem('srubka', 4);

var_dump($jedynka);