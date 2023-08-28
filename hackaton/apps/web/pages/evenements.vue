<template>
    <div>
        <div class="head-events">
            <h1 class="head-events_title">Événements privés ou professionnels,<br/>La Jungle s’adapte à toutes vos envies !</h1>
        </div>
        <div class="soirees">
            <NosEvenements/>
        </div>
    </div>

    

</template>

<script>
import NosEvenements from "../components/NosEvenements.vue";
export default {
    name: "evenements.vue",
    components: { NosEvenements }
}
</script>

<style lang="scss" scoped>
    //@import "@/style/abstracts/_mixins.scss";
    
    .head-events {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.39)), url(../static/images/nature-bg.jpg);
      background-size: cover;
      background-position: center;
      height: 70vh;
      width: 100%;
      position: relative;

      .head-events_title {
        color: white;
        font-size: 56px;
        padding-top: 15%;
        text-align: center;
        line-height: 90px;
        font-family: 'Kadwa', serif;
      }
    }

</style>
