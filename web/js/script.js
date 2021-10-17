$(document).ready(function(){
  $("#barra").click(function(){
    // $("#menu").addClass("menu-ativo")

    if($("#menu").hasClass("menu-ativo")){
        $("#menu").removeClass("menu-ativo")
    } else{
      $("#menu").addClass("menu-ativo")
    }
  })
})
