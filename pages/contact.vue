<template>
  <div id="contact">
    <div class="container_form">
      <div class="container_form_top">
        <h1 class="title_form">Vous souhaitez nous rendre visite ?</h1>
        <ButtonText color='beige' text-button="Réserver une table"/>
      </div>
      <form action="">
        <div class="form_container_name">
          <div class="container_name container_input">
            <label for="firstname">Prénom</label>
            <input type="text" placeholder="Prénom" name="firstname">
          </div>
          <div class="container_name container_input">
            <label for="lastname">Nom</label>
            <input type="text" placeholder="Nom" name="lastname">
          </div>
        </div>
        <div class="container_email container_input">
          <label for="email">Email</label>
          <input type="email" placeholder="Email" name="email">
        </div>
        <div class="container_tel container_input">
          <label for="tel">Tel</label>
          <input type="tel" placeholder="Télephone" name="tel">
        </div>
        <div class="container_message container_input">
          <span>Message</span>
          <textarea cols="60" rows="15"></textarea>
        </div>
        <ButtonText class="button_sumbit" href="" color='beige' text-button="Envoyer"/>
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
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.39)), url('../static/images/background-home.jpeg');
    background-size: cover;
    min-height: 100vh;
    padding-top: 200px;
    placeholder {
      margin-left: 30px;
    }
  .container_form{
    z-index: 9;
    width: 60%;
    margin: auto;
    background-color: red;
    padding: 100px 50px;
    .form_container_name{
      display: flex;
      justify-content: space-between;
      .container_name{
        width: 45%;
      }
    }
    .container_form_top{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;
      .title_form{
        font-size: 40px;
        color: #ECE2CF;
        margin-bottom: 60px;
      }
    }
    form{
      color: #ECE2CF;
      font-family: 'Kadwa', serif;
      label, span{
        margin: 15px 0 5px 0;
        font-size: 20px;
      }
      input{
        height: 50px;
        border-radius: 10px;
        padding-left: 20px;
        color: black;
      }
      .button_sumbit{
        margin-top: 70px;
        text-align: center;
      }
    }
  }
    .container_input{
      display: flex;
      flex-direction: column;
    }
    .container_form{
      //position: absolute;
      //left: 50%;
      //top: 30%;
      //transform: translate(-50%,-50%);
    }
  }

</style>
