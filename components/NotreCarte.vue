<template>
  <div class="carte">
  </div>
</template>

<script>
export default {
  name: "NotreCarte"
}
</script>

<style lang="scss" scoped>

.carte{
  position: absolute;
  width: 1232px;
  height: 1305px;
  left: 148px;
  top: 284px;

  background: #234E3A;
  border-radius: 20px;

  .carte_photo_plat1{
    background-image: url('../static/images/plat1.jpeg');
    background-size: cover;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .text_profile{
    font-family: 'Kadwa', serif;
    font-size: 25px;
    color: white;
  }
  .team_membre_profile_name{
    margin-top: 25px;
    margin-bottom: 10px;
  }
}

</style>
