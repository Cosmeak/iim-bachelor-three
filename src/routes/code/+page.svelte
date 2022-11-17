<script>
import { writable } from 'svelte/store'
let code = ""
let attempt = writable(3);
let showAttempt;

const submit = () => {
  const value = document.querySelector('#code').value
  if (value == 'digital'){
    window.location.replace(window.location.origin + '/chatbot') // Redirect to chat bot
  } else {
    attempt.update(n => n - 1)
    attempt.subscribe(value => {
      showAttempt = value
    })
    document.getElementById('error').innerHTML = `<p class="text-red-bismark text-center">Code incorrect, <br> vous avez encore ${showAttempt} tentatives</p>`
    if (showAttempt <= 0) {
      window.location.replace(window.location.origin + '/loose') // Redirect to loose screen
    }
  }
}
</script>

<svelte:head><title>Trouve le code</title></svelte:head>


<form method="POST" class="w-full h-full flex flex-col items-center justify-center gap-8" on:submit|preventDefault={submit}>
  <input type="text" name="code" id="code" class="text-center px-2 py-1 rounded-lg" placeholder="Entrer le code" value={code}>
  <button type="submit" class="text-red-bismark font-bold px-4 py-1 bg-beige-bis rounded-lg">Suivant <i class="fa-solid fa-caret-right my-auto fa-xl"></i></button>
  <div id="error"></div>
</form>
