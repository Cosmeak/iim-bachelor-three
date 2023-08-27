# Undercover - jeu du Fc Bouff 

<details>
  <summary>Contenu</summary>
  <ol>
    <li>
      <a href="#about-the-project">A Propos du projet 📁</a>
      <ul>
        <li><a href="#features">Les Features 📑</a></li>
      </ul>
    </li>
    <li>
      <a href="#Techs">Techs 💻</a>
    </li>
    <li><a href="#build-setup">Build Setup 🧑🏻‍💻</a></li>
    <li><a href="#contributors">Contributors 👥</a></li>
  </ol>
</details>

## Par rapport au projet
Ce projet est dans le cadre d'un cours en étude supérieur. Durant ces 2 jours, nous avons développé un jeu inspiré du jeu undercover.

Votre but est de découvrir l'identité des autres joueurs (et la vôtre !) aussi vite que possible pour éliminer vos ennemis.

Votre indice est un mot secret.

Chaque joueur et joueuse sera un personnage parmi les trois qui existent.

Chaque Civil reçoit le même mot secret. Son objectif est de démasquer le ou les Undercover et le ou les Mr et Mrs White.

Tu peux être Undercover. Chaque Undercover reçoit un mot légèrement différent de celui des Civils. Son objectif est de se faire passer pour l’un d’eux.

Tu peux être Mr ou Mrs White, et dans ce cas-là, tu ne recevras aucun mot. Ton but sera alors de faire croire que tu en as un, en essayant de deviner le mot des Civils.


### Les Features

- [x] Username creation page 
- [x] Waiting Room
- [x] Board view page
- [x] Routes
- [x] Socket implementation
- [x] API call to get, post and update data
- [ ] synonyme qui s'affiche en plein game
- [ ] rénitialisation de la game 
- [ ] webToken
- [ ] Cookie


## Techs

- [Node JS](https://nodejs.org/en/docs/)
- [Socket.io](https://socket.io/)
- [Prisma](https://www.prisma.io/)
- [HTML/CSS]


## Build Setup

```bash
# install dependencies
$ yarn install
# migrate database
$ yarn prisma db push
# seed database with words
$ yarn prisma db seed
# then just run :     
$ yarn dev
```


## Contributors

- [Guillaume FINE](https://github.com/Cosmeak)
- [Steven MADI](https://github.com/Oxyzal)
- [Yannis Obert](https://github.com/yannisobert)

**README inspired by [Clément DUVIVIER](https://github.com/ClemOurs)**


