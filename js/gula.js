$(document).ready(function () {
    $("#btnBurger").click(function () {
      $("#mySidevar").removeClass("showMenu");
      $("#banner").addClass("showMenu");
      //Quito boton burger
      $("#imgBtnopen").addClass("showMenu")
      //No funciono con showMenu, se agrega al de bootsrap
      $("#products").addClass("d-none")
      $("#Nosotros").addClass("showMenu")
    });
  });


  $(document).ready(function () {
    $(".btnClose").click(function () {
      $("#mySidevar").addClass("showMenu");
      $("#banner").removeClass("showMenu"); 
      //Agrego boton burger
      $("#imgBtnopen").removeClass("showMenu")
      $("#Nosotros").removeClass("showMenu")
      //No funciono con showMenu, se agrega la de bootstrap
      $("#products").removeClass("d-none")
    });
  });

