<?php

class ScrapperTest extends \PHPUnit\Framework\TestCase
{
    public function testGetLeaderboardByLevel()
    {
        $scrapper = new \Cosmeak\Scrapper\Scrapper();
        $this->assertNotEmpty($scrapper->getLeaderboardByLevel());
    }
}
