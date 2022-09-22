<template>
  <div class="main">
    <div class="main_home">
      <h1 class="main_title">Jungle <br> Arch</h1>
    </div>
    <section class="container_about">
      <div class="box_about">
        <div class="box_about_left">
          <h2>Le restautant</h2>
          <p class="about_text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,  vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci.</p>
          <img class="img_about img_about_1" src="../static/images/la-cuisine-ouverte1.png" alt="image about 1">
        </div>
        <div class="box_about_right">
          <img class="img_about img_about_2" src="../static/images/jungle-arch1.jpg" alt="image about 2">
        </div>
      </div>
    </section>
    <NotreHistoire/>
    <NotreEquipe/>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data(){
    return{
      textAbout:'',
      imageAbout1:'',
      imageAbout2:'',
    }
  },
}
</script>

<style lang="scss" scoped>
//@import "@/style/abstracts/_mixins.scss";
.main{

.main_home {
  background-image: url('../static/images/background-home.jpeg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  position: relative;


  .main_title {
    color: white;
    font-size: 110px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 130px;
    font-family: 'Kotta One', serif;
    animation: transitionText 0.75s ease-in-out;
  }
  //Overlay background image

  //.main_home:after{
  //  content: '';
  //  position: absolute;
  //  width: 100%;
  //  height: 100vh;
  //  background-color: red;
  //  top: 0;
  //  left: 0;
  //}

  @keyframes transitionText {
    from {
      opacity: 0;
      top: 30%;
    }
    to {
      opacity: 1;
      top: 50%;
    }
  }
}
  //  About me (Section Restaurant)

  .container_about{
    background-color: #ECE2CF;
    padding-top: 65px;
    .box_about{
      width: 90% !important;
      margin: auto;
      display: flex;
      justify-content: space-between;
    }
    .box_about_left{
      h2{
        font-size: 84px;
        font-family: 'Kadwa', serif;
        margin-bottom: 50px;
      }
      .about_text{
        font-size: 24px;
        width: 80%;
        line-height: 30px;
      }
      .img_about_1{
        margin-top: 150px;
      }
    }
  }
}


</style>
