<?php

declare(strict_types=1);
require_once('SetOfDrawers.php');

class Drawer extends SetOfDrawers
{
    private $idNumber;
    private $type;
    private $listOfItems = [];
    private $listOfQuantities = [];

    public function addItem(String $item, int $quantity):void 
    {
        
        array_push($this->listOfItems, $item);
        array_push($this->listOfQuantities, $quantity);
    }
    public function presentInside()
    {
        return $this->listOfItems;
    }
}