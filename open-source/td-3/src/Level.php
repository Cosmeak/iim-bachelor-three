<?php

namespace Cosmeak\Scrapper;

class Level
{
    private string $name;
    private array $story = [];
    private array $normal = [];
    private array $hard = [];
    private array $challenging = [];
    private array $heroic = [];
    private array $legendary = [];

    public function setName(string $name) : void
    {
        $this->name = $name;
    }

    public function setLevel(string $level, array $data): void
    {
        $this->$level = $data;
    }
}