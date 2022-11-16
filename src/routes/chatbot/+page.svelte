<script>
const submit = () => {

}
</script>

<main class="w-screen h-screen p-4 bg-slate-900">
  <div class="w-full h-full border border-white rounded-lg bg-white/10 p-4 relative">

    <!-- Bot -->
    <div class="flex items-center gap-2">
      <!-- Icon -->
      <div class="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <div class="w-6 h-6 bg-orange-400 rounded-full shadow-inner"></div>
      </div>
      <!-- Text -->
      <div class="text-lg bg-white px-2 py-1 rounded-lg font-medium">
        Hello world
      </div>
    </div>

    <!-- User -->
    <div class="flex flex-row-reverse items-center gap-2">
      <!-- Icon -->
      <div class="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <div class="w-6 h-6 bg-green-400 rounded-full shadow-inner"></div>
      </div>

      <!-- Text -->
      <div class="text-lg bg-white px-2 py-1 rounded-lg font-medium">
        Hello world
      </div>
    </div>

    <form 
      on:submit={submit()}
      class="absolute bottom-4 left-4 right-4 flex flex-col gap-2 font-medium"
    >
      <label for="one">
        <input type="radio" id="one" name="response" class="hidden peer" value={true}>
        <div class="bg-white peer-checked:bg-red-500 peer-checked:text-white px-2 py-1 rounded">
          true
        </div>
      </label>

      <label for="two">
        <input type="radio" id="two" name="response" class="hidden peer" value={false}>
        <div class="bg-white peer-checked:bg-red-500 peer-checked:text-white px-2 py-1 rounded">
          false
        </div>
      </label>

      <input type="submit" value="Répondre" class="bg-green-400 hover:bg-green-600 px-2 py-1 rounded">
    </form>
  </div>
</main>