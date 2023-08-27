# TD3 - Scrapper

A little scrapper of speedrun.com to get the leaderboard of each level of the game The Division 2.

## Installation

```bash 
composer require cosmeak/os-td3
```

## Usage

```php  
use Cosmeak\Scrapper\Scrapper;

$scrapper = new Scrapper();
$data = $scrapper->getLeaderboardByLevel();
```

## Local Dev
Test with phpunit
```bash
composer test
```

Check code with phpstan
```bash
composer phpstan
```

## License
[MIT](https://choosealicense.com/licenses/mit/)



