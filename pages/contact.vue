<template>
  <div id="contact">
    <div class="container_form">
      <div class="container_form_top">
        <h1 class="title_form">Vous souhaitez nous rendre visite ?</h1>
      </div>
      <form >
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
          <label for="meeting-time">Date de réservation</label>

          <input type="time" id="meeting-time"
                 name="meeting-time"  min="06:00" max="22:00">
        </div>
        <ButtonText class="button_sumbit" color='beige' text-button="Reserver"/>
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
@import "@/style/abstracts/_mixins.scss";
  #contact{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.39)), url('../static/images/background-home.jpeg');
    background-size: cover;
    min-height: 100vh;
    padding-top: 200px;
    placeholder {
      margin-left: 30px;
      margin-right: 30px;
    }
  .container_form{
    z-index: 9;
    width: 60%;
    margin: auto;
    background-color: red;
    padding: 100px 50px;
    @include md(){
      width: 100%;
      padding: 50px 10px;
    }
    .form_container_name{
      display: flex;
      justify-content: space-between;
      @include md(){
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .container_name{
        width: 45%;
        @include md(){
          width: 100%;
        }
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
        text-align: center;
        @include md(){
          margin-bottom: 0px;
        }
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
        padding-right: 30px;
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
