$(document).ready(function () {
    $("#btnBurger").click(function () {
      $("#mySidevar").removeClass("showMenu");
      $("#banner").addClass("showMenu");
    });
  });


  $(document).ready(function () {
    $(".btnClose").click(function () {
      $("#mySidevar").addClass("showMenu");
      $("#banner").removeClass("showMenu");  
    });
  });

