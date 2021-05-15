$(document).ready(function () {
    $("#btnBurger").click(function () {
      $("#mySidevar").removeClass("showMenu");
      $("#banner").addClass("showMenu");
      //Quito boton burger
      // $("#imgBtnopen").addClass("showMenu")
    });
  });


  $(document).ready(function () {
    $(".btnClose").click(function () {
      $("#mySidevar").addClass("showMenu");
      $("#banner").removeClass("showMenu"); 
      //Agrego boton burger
      $("#imgBtnopen").removeClass("showMenu") 
    });
  });

