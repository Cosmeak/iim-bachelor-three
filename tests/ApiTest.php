<?php

use Cosmeak\OsTd2\Api;
use PHPUnit\Framework\TestCase;

class ApiTest extends TestCase
{
    public function testGetRandomNumber()
    {
        $api = new Api();
        $number = $api->getRandomNumber();
        $this->assertIsInt($number);
        $this->assertGreaterThanOrEqual(0, $number);
        $this->assertLessThanOrEqual(100, $number);
    }
}