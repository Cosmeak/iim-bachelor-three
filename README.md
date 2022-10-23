# Pour toi nico c:

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project 📁</a>
    </li>
    <li>
      <a href="#Techs">Techs 💻</a>
    </li>
    <li><a href="#build-setup">Build Setup 🧑🏻‍💻</a></li>
    <li><a href="#contributors">Contributors 👥</a></li>
  </ol>
</details>

## About the project
Simplified reproduction of spotify as part of a course of Laravel X VueJS.

What we need to do a music streaming platform with:

- [x] auth and register to acceed to all songs / albums
- [x] artists
- [x] albums link to artist with title, cover and songs
- [x] songs, who can possibly be a single with title, cover
- [x] users with email, password, name, role (in my version: artist or user), birthdate and a music style if is artist
- [x] playlist that is link to user and have songs inside, with name and if it's private
- [x] friends of user
- [x] collaborators on playlist


## Techs

- [Laravel](https://laravel.com)
- [VueJS](https://vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)


## Build Setup

```bash
# install dependencies
$ composer install
# and
$ yarn

# migrate database after update .env
$ php artisan migrate --seed

# then just run :
$ php artisan serve
# and
$ yarn dev
```
## Contributors

- [Guillaume FINE](https://github.com/Cosmeak)
