<?php

declare(strict_types=1);
// require_once('Drawer.php');
class Item //extends Drawer
{
    private $name;
    private $quantity;

    public function __construct (String $name = '', int $quantity = 0)
    {
        $this->name = $name;
        $this->quantity = $quantity;
    }

    public function getName():String
    {
        return $this->name;
    }
    public function setName(String $name):Item
    {
        $this->name = $name;
        return $this;
    }

    public function getQuantity():int
    {
        return $this->quantity;
    }
    public function setQuantity(int $quantity):Item
    {
        $this->quantity = $quantity;
        return $this;
    }

}