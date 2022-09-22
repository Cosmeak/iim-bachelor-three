<template>
  <div class="team_membre_profile">
      <div class="team_membre_profile_picks">
        <!--  Container image        -->
      </div>
      <p class="text_profile team_membre_profile_name">Charlot Pharamond</p>
      <p class="text_profile team_membre_profile_role">cuisinier</p>
  </div>
</template>

<script>
export default {
  name: "ProfileEquipe"
}
</script>

<style lang="scss" scoped>
.team_membre_profile{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding:0 30px;
  .team_membre_profile_picks{
    background-image: url('../static/images/man.jpeg');
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
