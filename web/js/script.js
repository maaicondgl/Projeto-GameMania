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

// $(document).ready(function(){
//  $("#carrousel img:eq(0)").addClass("banner-ativo").show()
//  setInterval(slide,1000)

//   function slide(){
//     if( $(".banner-ativo").next().length) {
//         $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
//     }else{
//       $(".banner-ativo").removeClass().hide()
//       $("#carrousel img:eq(0)").addClass("banner-ativo").show()
      
//     }
//   }
// })
function slider(sliderName, velocidade) {
	var sliderClass = '.' + sliderName,
			activeClass = 'active',
			rotate = setInterval(rotateSlide, velocidade);
	
	$(sliderClass + ' > :first').addClass(activeClass);

	$(sliderClass).hover(function(){
		clearInterval(rotate);
	}, function() {
		rotate = setInterval(rotateSlide, velocidade);
	});
	
	function rotateSlide() {
		var activeSlide = $(sliderClass + ' > .' + activeClass),
				nextSlide = activeSlide.next();

		if(nextSlide.length == 0) {
			nextSlide = $(sliderClass + ' > :first');
		}
		activeSlide.removeClass(activeClass);
		nextSlide.addClass(activeClass);
	} 
}

slider('banner', 2000);
