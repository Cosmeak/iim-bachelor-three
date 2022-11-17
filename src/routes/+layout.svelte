<script>
import '../app.css';
</script>

<main class="w-screen h-screen bg-white-clay font-articula relative pt-2">
  <div class="w-full h-auto flex justify-center items-center gap-2">
    <h1 class="text-center text-2xl text-red-bismark font-bold">Vinci's Case</h1>
    <img src="./logo.png" class="w-10 h-10" alt="">
  </div>

  <slot />

  <a href="/" class="text-red-bismark font-bold p-2 bg-beige-bis rounded-lg absolute bottom-4 left-2/4 -translate-x-2/4"><i class="fa-solid fa-house"></i></a>
</main>