<template>
  <section class="team">
    <div class="team_membre">
      <h4 class="team_title">L'équipe</h4>
      <div class="container_membre_profile">
        <ProfileEquipe/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotreEquipe",

  data() {
    return {
      urlImage: '',
      nameMembre: '',
      roleMembre: '',
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/abstracts/_mixins.scss";

.team {
  background-color: #234E3A;

  .team_membre {
    width: 90%;
    margin: auto;

    .team_title {
      text-align: center;
      padding-top: 80px;
      font-size: 80px;
      font-family: 'Kadwa', serif;
      color: #ECE2CF;
      @include md() {
        font-size: 60px;
      }
    }
  }

  .container_membre_profile {
    display: flex;
    align-items: center;
    padding-top: 70px;
    max-width: 90%;
    height: 400px;
    overflow-x: scroll;
    overflow-y: hidden;
    margin: auto;
  }

  .container_membre_profile::-webkit-scrollbar {
    display: none;
  }
}
</style>
