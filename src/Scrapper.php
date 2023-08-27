<?php

declare(strict_types=1);

namespace Cosmeak\Scrapper;

use Symfony\Component\Panther\Client;
use Cosmeak\Scrapper\Level;
use function PHPUnit\Framework\isEmpty;

class Scrapper
{
    /**
     * @return Level[]
     */
    public function getLeaderboardByLevel() : array
    {
        $client = Client::createFirefoxClient(arguments: [
            '--window-size=1920,4080',
        ]);
        $crawler = $client->request('GET', 'https://www.speedrun.com/the_division_2/levels');
        $client->waitFor('.fc-cta-consent');
        $client->executeScript('document.querySelector(".fc-cta-consent").click()');
        $client->waitFor('#the_division_2');
        $levelTypes = ['story', 'normal', 'hard', 'challenging', 'heroic', 'legendary'];
        $levels = [];
        $crawler->filter('#the_division_2')->filter('tr')->each(function ($node) use ($levelTypes, &$levels) {
            $level = new Level();
            $node->filter('td')->each(function ($subnode, $j) use ($level, $levelTypes) {
                    if ($j == 0) {
                        $level->setName($subnode->text());
                    } else {
                        if (!empty($subnode->text())) {
                            $explode = explode(PHP_EOL, $subnode->text());
                            $level->setLevel($levelTypes[$j-1], [
                                'time' => $explode[0],
                                'players' => explode(',', $explode[1]),
                            ]);
                        }
                    }
            });
            $levels[] = $level;
        });
        return $levels;
    }
}
