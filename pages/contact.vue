<template>
  <div id="contact">
    <div class="container_form">
      <div class="container_form_top">
        <h1 class="title_form">Vous souhaitez nous rendre visite ?</h1>
        <ButtonText color='beige border-beige' text-button="Réserver une table"/>
      </div>
      <form action="">

      </form>
    </div>
  </div>

</template>

<script>
export default {
  name: "Contact.vue"
}
</script>

<style lang="scss" scoped>
  #contact{
    background-image: url('../static/images/background-home.jpeg');
    background-size: cover;
    min-height: 100vh;

    .container_form_top{
      display: flex;
      flex-direction: column;
      align-items: center;
      .title_form{
        margin-bottom: 30px;
        font-size: 40px;
        color: #ECE2CF;
      }
    }

    .container_form{
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%,-50%);
    }
  }
</style>
