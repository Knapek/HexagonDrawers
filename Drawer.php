<?php

declare(strict_types=1);
require_once('SetOfDrawers.php');

class Drawer extends SetOfDrawers
{
    private $idNumber;
    private $type;
    private $listOfItems = [];
    private $listOfQuantities;

    public function addItem(String $item, int $quantity):void 
    {
        $this->listOfItems->array_push($item);
        // $this->listOfQuantities->array_push($quantity);
    }
    public function presentInside()
    {
        return $this->listOfItems;
    }
}