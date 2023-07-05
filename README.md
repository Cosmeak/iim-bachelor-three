# TD3 - Scrapper

## Installation

```bash 
composer require cosmeak/os-td3
```

## Usage

```php  
use Cosmeak\OS\TD3\Scrapper;

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



