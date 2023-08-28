

<template>
  <div class="main">
    <div class="carte">
      
      <h1 class="main_title_menu">Découvrer notre menu</h1>

      <div class="menu_plat">
        <p class="plats"> Plats </p>
      </div>

      <div class="box_menu1">
        <p class="name_menu"> Exemple plat 1 </p> 
        <p class="price_menu"> $$$ </p> 
      </div>

      <div class="box_menu2">
        <p class="name_menu"> Exemple plat 2 </p> 
        <p class="price_menu"> $$$ </p> 
      </div>

      <div class="box_menu3">
        <p class="name_menu"> Exemple plat 3 </p> 
        <p class="price_menu"> $$$ </p> 
      </div>

       <div class="menu_dessert">
        <p class="dessert"> Dessert </p>
      </div>

      <div class="box_menu4">
        <p class="name_menu"> Exemple dessert 1 </p> 
        <p class="price_menu"> $$$ </p> 
      </div>

      <div class="box_menu5">
        <p class="name_menu"> Exemple dessert 2 </p> 
        <p class="price_menu"> $$$ </p> 
      </div>

      <div class="box_menu6">
        <p class="name_menu"> Exemple dessert 3 </p> 
        <p class="price_menu"> $$$ </p> 
      </div>

       <div class="menu_boisson">
        <p class="boisson"> Boisson </p>
      </div>

      <div class="box_menu7">
        <p class="name_menu"> Exemple boisson 1 </p> 
        <p class="price_menu"> $$$ </p> 
      </div>

      <div class="box_menu8">
        <p class="name_menu"> Exemple boisson 2 </p> 
        <p class="price_menu"> $$$ </p> 
      </div>

      <div class="box_menu9">
        <p class="name_menu"> Exemple boisson 3 </p> 
        <p class="price_menu"> $$$ </p> 
      </div>


      <div class="al">
        <h1 class="main_title_menu">Liste des allergènes</h1>
	    </div>

    </div>

  </div>

</template>

<script>

export default {
  name: "Menu.vue"
}
</script>

<style lang="scss" scoped>

//<img class="icon" src="../static/images/glass.png" alt="icon"> (icon filters)
//<img class="icon" src="../static/images/food.png" alt="icon">

.main{
  background-image: url('../static/images/background-menu.jpg');
  background-size: cover;
  background-position: center;
  min-height: 3000px;
  width: 100%;
  background-attachment: fixed;
  position: relative;

.carte {
  position: absolute;
  width: 1232px;
  height: 1305px;
  left: 148px;
  top: 284px;
  background: #234E3A;
  border-radius: 20px;

  .main_title_menu {
    color: white;
    font-size: 50px;
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 120px;
    font-family: 'Kadwa', serif;
  }

  .carte_photo_plat1{
    background-image: url('../static/images/plat1.jpeg');
    background-size: cover;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .menu_plat{
    box-sizing: border-box;
    position: absolute;
    width: 138px;
    height: 53px;
    left: 550px;
    top: 240px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid #FFFFFF;
    border-radius: 8px;

    .plats{
      color: #FFFFFF;
      text-align: center;
      
      font-family: 'Kadwa', serif;
    }

  }

  .box_menu1{
  box-sizing: border-box;
  position: absolute;
  width: 240px;
  height: 230px;
  left: 200px;
  top: 320px;
  background: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 8px;
  }

  .box_menu2{
  box-sizing: border-box;
  position: absolute;
  width: 240px;
  height: 230px;
  left: 500px;
  top: 320px;
  background: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 8px;
  }

  .box_menu3{
  box-sizing: border-box;
  position: absolute;
  width: 240px;
  height: 230px;
  left: 800px;
  top: 320px;
  background: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 8px;
  }

  .menu_dessert{
    box-sizing: border-box;
    position: absolute;
    width: 138px;
    height: 53px;
    left: 550px;
    top: 580px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid #FFFFFF;
    border-radius: 8px;

    .dessert{
      color: #FFFFFF;
      text-align: center;
      font-family: 'Kadwa', serif;
    }

  }

  .box_menu4{
  box-sizing: border-box;
  position: absolute;
  width: 240px;
  height: 230px;
  left: 200px;
  top: 650px;
  background: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 8px;
  }

  .box_menu5{
  box-sizing: border-box;
  position: absolute;
  width: 240px;
  height: 230px;
  left: 500px;
  top: 650px;
  background: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 8px;
  }

  .box_menu6{
  box-sizing: border-box;
  position: absolute;
  width: 240px;
  height: 230px;
  left: 800px;
  top: 650px;
  background: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 8px;
  }

  .menu_boisson{
    box-sizing: border-box;
    position: absolute;
    width: 138px;
    height: 53px;
    left: 550px;
    top: 900px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid #FFFFFF;
    border-radius: 8px;

    .boisson{
      color: #FFFFFF;
      text-align: center;
      font-family: 'Kadwa', serif;
    }

  }

  .box_menu7{
  box-sizing: border-box;
  position: absolute;
  width: 240px;
  height: 230px;
  left: 200px;
  top: 980px;
  background: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 8px;
  }

  .box_menu8{
  box-sizing: border-box;
  position: absolute;
  width: 240px;
  height: 230px;
  left: 500px;
  top: 980px;
  background: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 8px;
  }

  .box_menu9{
  box-sizing: border-box;
  position: absolute;
  width: 240px;
  height: 230px;
  left: 800px;
  top: 980px;
  background: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 8px;
  }

  .name_menu{
    color: #000000 ;
    text-align: center;
    font-family: 'Kadwa', serif;
  }

  .price_menu{
    color: #000000 ;
    text-align: center;
    font-family: 'Kadwa', serif;    
  }

  .al {
  position: absolute;
  width: 1232px;
  height: 684px;
  left: 0px;
  top: 1450px;
  background: #234E3A;
  border-radius: 20px;
  }

}

}


</style>