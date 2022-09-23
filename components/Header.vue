<template>
  <div class="header">
    <div class="container_header">
      <div class="container_logo">
        <img src="../static/images/junglearchlogo.png" alt="logo header">
      </div>
      <div class="container_links">
        <ul>
          <li>
            <NuxtLink to="/">Accueil</NuxtLink>
            <NuxtLink to="/carte">Carte</NuxtLink>
            <NuxtLink to="/evenements">Événements</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
.header{
  z-index: -999;
  .container_header{
    width: 90%;
    display: flex;
    align-items: center;
    position: fixed;
    justify-content: space-between;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;


    .container_links a{
      color: white;
      padding: 0 20px;
      font-size: 20px;
      font-weight: 500;
      cursor: pointer;
    }
  }
}

</style>
