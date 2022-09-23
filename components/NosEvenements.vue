<template>
  <div id="soiree">
    <div class="container_evenements">
      <div class="container_evenements_text">
        <h2>Soirée à thème, karaoke, ...</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci.</p>
      </div>
      <div class="container_evenements_image">
      </div>
    </div>
    <div class="evenements_button">
      <ButtonText color='beige' text-button="Contact - Réservation"/> 
    </div>
  </div>
</template>

<script>
export default {
  name: "nosEvenements",
  data(){
    return{
      image: '',
      text:'',
    }
  }
}
</script>

<style lang="scss" scoped>

    #soiree{
      background-color: #163024;
      height: 100vh;
        background-image: url('../static/images/fond-feuillage.jpg');
        background-size: cover;
        background-blend-mode: multiply;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


    .container_evenements{
      display: flex;
      width: 90%;
      justify-content: space-between;
      align-items: center;
      margin: auto;


      .container_evenements_text{
        background-size: cover;
        width: 60%;
        
        h2 {
          color: #ECE2CF;
          font-size: 54px;
          font-family: 'Kadwa', serif;
          margin: 75px auto;
        }
        
        p {
          color: white;
          font-size: 24px;
          font-family: 'Kadwa', serif;
          margin: 0 10%;
        }
      }
        .container_evenements_image{
            height: 600px;
            width: 40%;
            background-image: url('../static/images/deco-interieure.jpg');
            background-position: bottom;
            background-size: contain;
            background-repeat: no-repeat;
      }
    }

    .evenements_button {
      margin: 80px;
      text-align: center;
    }
  }
</style>
