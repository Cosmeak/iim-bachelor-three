<script>
import { redirect } from '@sveltejs/kit'

let code = ""
const submit = () => {
  const value = document.querySelector('#code').value
  if (value == 'digital'){
    console.log(true)
    redirect(302, '/chatbot')
  } else {
    let tentative = 1
    document.getElementsByTagName('form')[0].innerHTML += `<p class="text-red-bismark text-center">Code incorrect, <br> vous avez encore ${tentative} tentatives</p>`
  }
}
</script>

<form class="w-full h-full flex flex-col items-center justify-center gap-8" on:submit|preventDefault={submit}>
  <input type="text" id="code" class="text-center px-2 py-1 rounded-lg" placeholder="Entrer le code" value={code}>
  <button type="submit" class="text-red-bismark font-bold px-4 py-2 bg-beige-bis rounded-lg">Suivant <i class="fa-solid fa-caret-right my-auto fa-xl"></i></button>
</form>
