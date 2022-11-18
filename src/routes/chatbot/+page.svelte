<script>
import { onMount } from 'svelte'

const input = (inputString) => {
  const messagesContainer = document.getElementById('messages')
  messagesContainer.innerHTML += `
    <div class="flex flex-row-reverse items-end gap-2">
      <!-- Icon -->
      <div class="w-4 h-4 bg-white rounded-full flex justify-center items-center"></div>
      <!-- Text -->
      <div class="w-8/12 text-lg bg-beige-bis px-2 py-1 rounded-lg font-medium">
        ${inputString}
      </div>
    </div>
  `
}

const output = (outputString) => {
  const messagesContainer = document.getElementById('messages')
  messagesContainer.innerHTML += `
    <div class="flex items-end gap-2">
      <!-- Icon -->
      <div class="w-4 h-4 bg-white rounded-full"></div>
      <!-- Text -->
      <div class="w-8/12 text-lg bg-beige-bis px-2 py-1 rounded-lg font-medium">
        ${outputString}
      </div>
    </div>
  `
}

let step = 0
let radioChoice = false
const next = () => {
  const button = document.getElementById('next')
  const radio = document.getElementById('radio')
  button.classList.add('hidden')
  radio.classList.add('hidden')
  step++
  console.log(step)
  console.log(radioChoice)
  switch (step) {
    case 1:
      input('Je suis là pour vous aider.')
      setTimeout(() => input('Pouvez-vous me dire où vous vous trouvez ?'), 2000)
      setTimeout(() => output('Je ne sais pas.'), 6000)
      setTimeout(() => button.classList.remove('hidden'), 6100)
      break
    case 2:
      input('Est-ce qu’il y a un indice autour de vous que je pourrais utiliser pour vous aider ?')
      setTimeout(() => output('Je vais regarder dans les poches de ma veste si je ne trouve pas quelque chose.'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 3:
      input('Avez-vous trouvé quelque chose ?')
      setTimeout(() => output('J’ai retrouvé mon carnet dans la poche intérieur de ma veste.'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 4:
      input('Regardez si vous n’avez pas écrit quelque chose qui pourrait nous aider.')
      setTimeout(() => output('Je vais regarder.'), 2000)
      setTimeout(() => output('J’ai écrit : passage dans le Hub au 2ème étage direction salle 202, affiche vieux journaux.'), 4000)
      setTimeout(() => output('J’ai dû écrire ceci quelques minutes après avoir été enfermé dans la salle étant donné que j’ai eu le temps de m’en rappeler avant que ma mémoire ne me fasse défaut.'), 6000)
      setTimeout(() => output('Est-ce que cela peut vous aider ?'), 8000)
      setTimeout(() => button.classList.remove('hidden'), 8100)
      break
    case 5:
      input('Je traverse le Hub en direction de la salle 202.')
      setTimeout(() => output('Est-ce que vous avez trouvé un indice qui vous fait penser à une affiche de vieux journaux ?'), 2000)
      setTimeout(() => radio.classList.remove('hidden'), 2100)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 6:
      if (radioChoice) {
        input('Oui.')
        input('Il y a la moitié d’une affiche déchirée en deux.')
        setTimeout(() => output('Quelque chose doit être caché dans cette affiche déchirée.'), 2000)
        setTimeout(() => output('Est-ce que vous voyez un indice ?'), 2000)
        setTimeout(() => radio.classList.remove('hidden'), 2100)
        setTimeout(() => button.classList.remove('hidden'), 2100)
        break
      } else {
        step--
        input('Non pas encore.')
        setTimeout(() => output('Je ne dois pas avoir écrit ceci par hasard. Regardez si vous ne trouvez pas une affiche de vieux journaux affichée sur un mur dans le Hub.'), 6000)
        setTimeout(() => output('Vous voyez quelque chose ?'), 8000)
        setTimeout(() => radio.classList.remove('hidden'), 6100)
        setTimeout(() => button.classList.remove('hidden'), 6100)
        break
      }
    case 7:
      if (radioChoice) {
        input('Oui.')
        setTimeout(() => output('De quoi s’agit-il ?'), 2000)
        setTimeout(() => button.classList.remove('hidden'), 2100)
        break
      } else {
        step = 6.1
        input('Non.')
        setTimeout(() => output('Envoyez moi une photo de cette affiche comme ça je pourrais vous aidez à chercher un indice.'), 2000)
        setTimeout(() => button.classList.remove('hidden'), 2100)
        break
      }
    // If false in last case
    case 7.1:
      step = 6.2
      input(`<img src="./logo.png" class="w-12 h-12 object-contain">`)
      setTimeout(() => output('Il me semble qu’un QR code s’est caché dans cette affiche !'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 7.2:
      step = 6.3
      input('Je vais regarder l’affiche de plus près afin de le trouver.')
      setTimeout(() => output('L’avez-vous trouvé ?'), 6000)
      setTimeout(() => button.classList.remove('hidden'), 6100)
      break
    case 7.3:
      step = 9
      input('oui')
      setTimeout(() => output('Scannez-le, il vous donnera probablement un nouvel indice !'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 8:
      input('Vous avez vu juste un élément s’est caché dans l’affiche.')
      setTimeout(() => output('Quel est cet élément ?'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 9:
      input('Il s’agit d’un QR code.')
      setTimeout(() => output('Scannez-le, il vous donnera probablement un nouvel indice !'), 2000)
      setTimeout(() => output('Regardez dans votre téléphone, vous devez sûrement avoir un outil pour pouvoir décrypter ce QR code.'), 4000)
      setTimeout(() => output('Qu’avez-vous trouvé ?'), 6000)
      setTimeout(() => button.classList.remove('hidden'), 6100)
      break
    case 10:
      input('Je dois résoudre une énigme.')
      setTimeout(() => output('Vous pouvez y arriver.'), 2000)
      setTimeout(() => output(' Avez-vous pu résoudre l’énigme ?'), 8000)
      setTimeout(() => radio.classList.remove('hidden'), 8100)
      setTimeout(() => button.classList.remove('hidden'), 8200)
      break
    case 11:
      if (radioChoice) {
        input('Oui.')
        setTimeout(() => output('Quel résultat obtenez-vous ?'), 2000)
        setTimeout(() => button.classList.remove('hidden'), 2100)
        break
      } else {
        step--
        input('Non.')
        setTimeout(() => output('Prenez votre temps vous allez y arriver !'), 2000)
        setTimeout(() => radio.classList.remove('hidden'), 2100)
        setTimeout(() => button.classList.remove('hidden'), 2200)
        break
      }
    case 12:
      input('Le numéro 206.')
      setTimeout(() => output('Super. Rendez-vous dans la salle 206. Un nouvel indice devrait vous rapprocher un peu plus du coupable.'), 2000)
      setTimeout(() => output('Êtes-vous dans la salle 206 ?'), 4000)
      setTimeout(() => button.classList.remove('hidden'), 4100)
      break
    case 13:
      input('J’y suis !')
      setTimeout(() => output('Qu’avez-vous trouvé ?'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 14:
      input('Il y a une boîte fermée à clé avec un cadenas à code.')
      setTimeout(() => output('Y a-t-il un autre élément dans la pièce pour vous permettre de connaître la combinaison du code ?'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 15:
      input('Il y a une nouvelle énigme à résoudre.')
      setTimeout(() => output('Très bien ! Celle-ci vous permettra sûrement de déchiffrer la combinaison du cadenas.'), 2000)
      setTimeout(() => output('Je vous laisse vous concentrer ! Faites-moi signe une fois que vous avez réussi !'), 4000)
      setTimeout(() => button.classList.remove('hidden'), 4100)
      break
    case 16:
      input('J’ai réussi à ouvrir la boîte !')
      setTimeout(() => output('Qu’est-ce qui se trouve dans la boîte ?'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 17:
      input('Il y a une clé anglaise.')
      setTimeout(() => output('Une clé anglaise ? C’est étrange…'), 2000)
      setTimeout(() => output('Cependant, si la personne qui m’a enfermé dans cette pièce m’a assommé avec cette clé anglaise, cela expliquerait la bosse que j’ai sur la tête.'), 4000)
      setTimeout(() => output('Le coupable a sûrement dû laisser des indices derrière lui. Vous allez trouver un nouvel indice !'), 6000)
      setTimeout(() => button.classList.remove('hidden'), 6100)
      break
    case 18:
      input('J’ai trouvé quelque chose d’intéressant !')
      setTimeout(() => output('Dites-moi en plus !'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 19:
      input('J’ai découvert des empreintes sur la clé anglaise !')
      setTimeout(() => output('Des empreintes ! Celles-ci devraient nous mener au coupable !'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 20:
      input('Comment puis-je savoir à qui correspondent ces empreintes ?')
      setTimeout(() => output('Envoyez-moi une photo des empreintes.'), 2000)
      setTimeout(() => output('La base de données de l’IIM me permettra de trouver à qui elles appartiennent.'), 4000)
      setTimeout(() => button.classList.remove('hidden'), 4100)
      break
    case 21:
      input(`<img src="./digital_print.png" class="w-12 h-12 object-contain">`)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 22:
      input('Avez-vous trouvez à qui appartiennent ces empreintes ?')
      setTimeout(() => output('Oui. La base de données a révélé que sur la clé anglaise il y a trois empreintes qui appartiennent à trois personnes différentes.'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 23:
      input('De qui s’agit-il ?')
      setTimeout(() => output('Il s’agit de mes collègues, Professeur Serdi, Professeur Portin et Professeur Cadéhine.'), 2000)
      setTimeout(() => output('Je vais regarder si je trouve des éléments supplémentaires dans la base de données de l’IIM.'), 4000)
      setTimeout(() => button.classList.remove('hidden'), 4100)
      break
    case 24:
      input('Est-ce que vos recherches vous ont permis de découvrir quelque chose ?')
      setTimeout(() => output('J’ai retrouvé une conversation que nous avons eue hier avec mes collègues sur le groupe IIM Chat.'), 2000)
      setTimeout(() => output(`<img src="./conversation-IIM-chat.png" class="w-12 h-12 object-contain">`), 3000)
      setTimeout(() => button.classList.remove('hidden'), 3100)
      break
    case 25:
      input('D’après ce que je comprends, vos collègues ont utilisé la boîte à outil de l’IIM pour réparer une chaise qui se trouve dans vos bureaux.')
      setTimeout(() => output('Professeur Serdi, Professeur Portin ainsi que Professeur Cadéhine étaient présents tous les trois et ont donc sûrement touché la clé anglaise.'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 26:
      input('Évidemment ! Cela expliquerait les trois empreintes.')
      setTimeout(() => output('Cela ne nous permet donc pas de connaître le coupable.'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 27:
      input('Non mais on connaît désormais les suspects et l’arme avec laquelle vous avez été assommé.')
      setTimeout(() => input('Pouvez-vous chercher d’autres indices dans la base de données ?'), 2000)
      setTimeout(() => output('Je vais regarder si je trouve un élément supplémentaire.'), 4000)
      setTimeout(() => output(' Il me semble que ceci va beaucoup vous aider.'), 6000)
      setTimeout(() => button.classList.remove('hidden'), 6100)
      break
    case 28:
      input('Envoyez-moi ce que vous avez trouvé !')
      setTimeout(() => output('Il s’agit de messages vocaux qui ont visiblement été volontairement brouillés.'), 2000)
      setTimeout(() => output(`<audio controls class="w-full"><source src="./message-vocal-01.mpeg" type="audio/mpeg"></audio>`), 4000)
      setTimeout(() => output(`<audio controls class="w-full"><source src="./message-vocal-02.mpeg" type="audio/mpeg"></audio>`), 4000)
      setTimeout(() => output(`<audio controls class="w-full"><source src="./message-vocal-03.mp3" type="audio/mpeg"></audio>`), 4000)
      setTimeout(() => output('Qu’en pensez-vous ?'), 6000)
      setTimeout(() => button.classList.remove('hidden'), 6100)
      break
    case 29:
      input('D’après les messages vocaux on dirait que le coupable n’a pas agi seul et qu’un complice l’a aidé.')
      setTimeout(() => input('Est-ce que vous reconnaissez les voix ?'), 2000)
      setTimeout(() => output('Il me semble que je reconnais la voix de ma collègue Madame Cadéhine sur le troisième message vocal.'), 4000)
      setTimeout(() => button.classList.remove('hidden'), 4100)
      break
    case 30:
      input('Il pourrait donc s’agir d’une complice et non d’un complice.')
      setTimeout(() => output('Qu’avez-vous décrypté d’autre à travers ces messages vocaux ?'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 31:
      input('Il me semble avoir décrypté d’autres indices importants.')
      setTimeout(() => output('Quels sont ces nouveaux indices ?'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 32:
      input('Il s’agirait d’une clé qui aurait été cachée.')
      setTimeout(() => output('Pourrait-il s’agir de la clé de la salle dans laquelle je suis enfermé ?'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2100)
      break
    case 33:
      radio.querySelector('#radioTextOne').textContent = 307
      radio.querySelector('#radioTextTwo').textContent = 407

      input('C’est une possibilité. Cependant, il semblerait que cette clé ait été cassée en trois morceaux et que l’un d’entre eux se cache dans une nouvelle salle.')
      setTimeout(() => output('De quelle salle s’agit-il ?'), 2000)
      setTimeout(() => radio.classList.remove('hidden'), 2100)
      setTimeout(() => button.classList.remove('hidden'), 2200)
      break
    case 34:
      if (radioChoice) {
        input('307')
        setTimeout(() => output('J’ai l’impression que votre intuition est juste. Une partie de cette clé dont vous parlez doit se trouver dans cette salle.'), 2000)
        setTimeout(() => button.classList.remove('hidden'), 2200)
        break
      } else {
        input('407')
        setTimeout(() => output('Je pense plutôt avoir entendu le chiffre 307.'), 2000)
        setTimeout(() => output('Commencez par aller voir si un morceau de cette clé ne se trouve pas en salle 307.'), 2000)
        setTimeout(() => output('Êtes-vous dans la salle 307 ?'), 6000);
        setTimeout(() => button.classList.remove('hidden'), 6200)
        break
      }
    case 35:
      input('Oui.')
      setTimeout(() => output('Que voyez-vous ?'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2200)
      break
    case 36:
      input('Je dois résoudre une nouvelle énigme pour pouvoir trouver un morceau de la clé.')
      setTimeout(() => output('Avez-vous réussi ?'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2200)
      break
    case 37:
      input('Oui, j’ai trouvé un morceau de la clé !')
      setTimeout(() => output('J’en suis sûr vous êtes sur le point de retrouver les morceaux manquants de la clé et de découvrir la vérité.'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2200)
      break
    case 38:
      input('Où pensez-vous que je dois me rendre à présent ?')
      setTimeout(() => output('Quelque chose me revient !'), 2000)
      setTimeout(() => output('Pour me souvenir de ce que vous aviez dit, j’ai écrit dans mon carnet que l’affiche que vous avez trouvée avant était une moitié d’affiche déchirée. '), 4000)
      setTimeout(() => button.classList.remove('hidden'), 4200)
      break
    case 39:
      input('C’est exact.')
      setTimeout(() => output('Cela signifie que l’autre moitié de l’affiche se trouve sûrement à quelque part dans l’établissement.'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2200)
      break
    case 40:
      input('Avez-vous une idée de l’endroit où elle pourrait se trouver ?')
      setTimeout(() => output('Allez voir dans la Mezzanine.'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2200)
      break
    case 41:
      input('Je l’ai trouvée !')
      setTimeout(() => output('Avez-vous trouvé un nouvel indice caché ?'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2200)
      break
    case 42:
      input('Oui!')
      setTimeout(() => input('Je dois me rendre dans la salle 301.'), 2000)
      setTimeout(() => output('Est-ce que vous avez trouvé l’autre morceau de la clé ?'), 4000)
      setTimeout(() => button.classList.remove('hidden'), 4200)
      break
    case 43:
      input('Je dois résoudre une nouvelle énigme.')
      setTimeout(() => output('Cela ne devrait plus être très complexe, vous êtes en train de devenir un vrai détective.'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2200)
      break
    case 44:
      input('J’ai trouvé un autre morceau de la clé !')
      setTimeout(() => output('Regardez bien à l’endroit où vous avez trouvé le morceau de clé. Le coupable a sûrement laissé un indice derrière lui.'), 2000)
      setTimeout(() => output('Avez-vous trouvé quelque chose ?'), 4000)
      setTimeout(() => button.classList.remove('hidden'), 4200)
      break
    case 45:
      input('Oui!')
      setTimeout(() => input('J’ai découvert une veste.'), 2000)
      setTimeout(() => output('Elle appartient probablement au coupable. Il a sûrement dû utiliser ma dernière invention qui permet de digitaliser tous les objets pour cacher les preuves derrière lui.'), 4000)
      setTimeout(() => output('De quelle couleur est-elle ?'), 6000)
      setTimeout(() => button.classList.remove('hidden'), 6200)
      break
    case 46:
      input('Verte.')
      setTimeout(() => output('Cet indice doit maintenant vous permettre de connaître le coupable.'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2200)
      break
    case 47:
      input('Effectivement, le coupable est le Professeur Portin, car il a été vu le jour de votre disparition avec une veste verte.')
      setTimeout(() => output('A-t-il laissé un autre indice dans sa veste pour trouver le dernier bout de la clé ?'), 2000)
      setTimeout(() => output('Un numéro de salle peut-être ?'), 4000)
      setTimeout(() => button.classList.remove('hidden'), 4200)
      break
    case 48:
      input('Effectivement, j’ai déchiffré un nouveau numéro de salle.')
      setTimeout(() => output('Où devez-vous aller ?'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2200)
      break
    case 49:
      input('En salle 203.')
      setTimeout(() => output('Une dernière énigme doit sûrement vous attendre là-bas.'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2200)
      break
    case 50:
      input('J’ai trouvé le dernier morceau de la clé !')
      setTimeout(() => output('Avez-vous trouvé le numéro de la salle dans laquelle je suis enfermé ?'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2200)
      break
    case 51:
      input('Oui, elle est écrite sur la clé !')
      setTimeout(() => output('Je vous attends. Vous pouvez venir me libérer.'), 2000)
      setTimeout(() => button.classList.remove('hidden'), 2200)
      break
    case 52:
      window.location.replace(window.location.origin + '/win') // Redirect to win screen
      break
  }
}

// On page load
onMount(() => {
  output('Venez m’aider !')
  output('Je suis enfermé.')
})
</script>

<svelte:head><title>ChatBot</title></svelte:head>

<div class="w-full h-5/6 px-4 pt-4 flex flex-col gap-4">
  <div id="messages" class="flex flex-col gap-4 overflow-y-auto h-5/6 border border-beige-bis p-2 rounded-lg shadow-inner"></div>

  <div class="h-1/6 w-full flex flex-col justify-end gap-2">
    <div id="radio" class="flex flex-col gap-2 font-medium hidden">
      <label for="one">
        <input type="radio" id="one" name="response" class="hidden peer" value={true} bind:group={radioChoice}>
        <div id="radioTextOne" class="bg-white peer-checked:bg-red-500 peer-checked:text-white px-2 py-1 rounded">
          Oui
        </div>
      </label>

      <label for="two">
        <input type="radio" id="two" name="response" class="hidden peer" value={false} bind:group={radioChoice}>
        <div id="radioTextTwo"  class="bg-white peer-checked:bg-red-500 peer-checked:text-white px-2 py-1 rounded">
          Non
        </div>
      </label>
    </div>
    <button on:click={next} id="next" class="text-red-bismark font-bold px-4 py-1 bg-beige-bis rounded-lg w-full">Suivant <i class="fa-solid fa-caret-right my-auto fa-xl"></i></button>
  </div>
</div>