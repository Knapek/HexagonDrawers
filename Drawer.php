<?php

declare(strict_types=1);
//require_once('SetOfDrawers.php');

class Drawer //extends SetOfDrawers
{
    private static $idNumber = 0;
    private $type;
    private $listOfItems = [];
    private $listOfQuantities = [];

    public function __construct(String $type = 'Półotwarta')
    {
        $this->type = $type;
    }

    public function addItem(String $item, int $quantity):void 
    {
        
        array_push($this->listOfItems, $item);
        array_push($this->listOfQuantities, $quantity);
    }
    public function presentInside():void
    {
        // foreach ($this->listOfItems as $key => $value) {
        //     foreach ($this->listOfQuantities as $key1 => $value1) {
        //         echo $value,' ',$value1,PHP_EOL;
        //     }
        // }
        for($i = 0 ; $i < count($this->listOfItems); $i++){
            echo $this->listOfItems[$i], ' : ', $this->listOfQuantities[$i],PHP_EOL;
        }
    }
}