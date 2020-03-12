<?php

declare(strict_types=1);

class SetOfDrawers 
{
    private $name;
    private $listOfDrawers = [];
    
    public function __construct(String $name = '')
    {
        $this->name = $name;
    }

    public function addDrawer(Object $drawer):void
    {
        array_push($this->listOfDrawers, $drawer);
    }
    public function presentAllDrawers()
    {
        return $this->listOfDrawers;
    }
}