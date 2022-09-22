<template>
  <div id="histoire">
    <div class="container_histoire">
      <div class="container_histoire_left">
        <h3>Notre Histoire</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci.</p>
      </div>
      <div class="container_histoire_right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notreHistoire",
  data(){
    return{
      image: '',
      text:'',
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/abstracts/_mixins.scss";
  #histoire{
    background-color: #ECE2CF;
    //height: 80vh;
    @include md(){
      height: auto;
    }
    .container_histoire{
      display: flex;
      width: 90%;
      justify-content: space-between;
      align-items: center;
      margin: auto;
      @include md(){
        flex-direction: column;
      }
      .container_histoire_right{
        background-image: url('../static/images/la-deco.png');
        background-position: center;
        background-size: cover;
        width: 40%;
        height: 80vh;
        @include md(){
          width: 100%;
        }
      }
        .container_histoire_left{
            width: 40%;
          @include md(){
            width: 100%;
            margin-bottom: 40px;
          }
            h3{
              font-size: 48px;
              font-family: 'Kadwa', serif;
              margin-bottom: 23px;
              padding-top: 100px;
              @include md(){
                padding-top: 30px;
              }
            }
            p{
              font-size: 24px;
            }
      }
    }
  }
</style>
