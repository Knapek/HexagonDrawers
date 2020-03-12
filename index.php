<?php

declare(strict_types=1);
require_once('Drawer.php');
require_once('Item.php');

$jedynka = new Drawer();

$jedynka->addItem('srubka', 4);
$jedynka->addItem('nakretka', 10);


$kondensator = new Item('Kondensator 100nF', 30);
$kondensator->setQuantity(29);
$jedynka->addItem($kondensator->getName(), $kondensator->getQuantity());
$jedynka->presentInside();


$dwojka = new Drawer();

var_dump($jedynka);
var_dump($dwojka);


echo Drawer::$counter;