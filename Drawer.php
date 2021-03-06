<?php

declare(strict_types=1);
//require_once('SetOfDrawers.php');

class Drawer //extends SetOfDrawers
{
    public static $counter = 0;
    private $idNumber;
    private $type;
    private $listOfItems = [];

    public function __construct(String $type = 'Półotwarta')
    {
        $this->idNumber = Drawer::$counter;
        $this->type = $type;
        Drawer::$counter++;
    }


    public function addItemObj(Object $item):void 
    {
        array_push($this->listOfItems, $item);
    }

    public function presentInside():void
    {
        foreach ($this->listOfItems as $key => $value) {
            
                echo $key,' : ',$value->getName(), ', ilość: ', $value->getQuantity(),PHP_EOL;
            
        }
      
    }
}