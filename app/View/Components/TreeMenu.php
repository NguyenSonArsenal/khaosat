<?php

namespace App\View\Components;

use Illuminate\View\Component;

class TreeMenu extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public $menus;
    public function __construct($menus = [])
    {
        $this->menus = $menus;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.tree-menu');
    }
}
