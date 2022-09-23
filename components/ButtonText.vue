<template>
<div class="container_button">
  <NuxtLink :to="linkButton" class="button_link" :class="color" href="">{{textButton}}</NuxtLink>
</div>
</template>

<script>
export default {
  name: "ButtonText",
  props: ['textButton','color','linkButton'],
  data(){
    return{
    }
  }
}
</script>

<style lang="scss" scoped>
.container_button{
  cursor: pointer;
  position: relative;
  .button_link{
    border:1px solid white;
    padding: 10px 30px;
    border-radius: 20px;
    font-size: 22px;
    font-family: 'Kadwa', serif;
  }
  .green{
    background-color:#234E3A;
    color:  #ECE2CF;
  }
  .beige{
    background-color: #ECE2CF;
    color: #234E3A;
  }
}
</style>
