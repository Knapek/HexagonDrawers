<?php

declare(strict_types=1);
require_once('Drawer.php');
require_once('Item.php');
require_once('SetOfDrawers.php');

$graciarnia = new SetOfDrawers('Graciarnia');

$zerowka = new Drawer();
$jedynka = new Drawer();
$dwojka = new Drawer('pełna');

$graciarnia->addDrawer($zerowka);
$graciarnia->addDrawer($jedynka);
$graciarnia->addDrawer($dwojka);

$kondensator = new Item('Kondensator 100nF', 30);
$sruba = new Item('Sruba' , 53);


$jedynka->addItemObj($kondensator);
$jedynka->addItemObj($sruba);

var_export($zerowka);
var_dump($jedynka);
var_export($dwojka);
echo PHP_EOL,'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',PHP_EOL;
// var_export($graciarnia);


echo Drawer::$counter,PHP_EOL;

$jedynka->presentInside();
