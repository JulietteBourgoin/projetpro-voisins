// Menu hamburger
jQuery(document).ready(function($){
		
		$("#open-btn").on("click",function(e){
			e.stopPropagation(); //pour ne pas propager l'évènement à d'autres choses derriere
			
			$("#main-nav").addClass("open");
			
		});
		
		$("#close-btn").on("click",function(e){
			e.stopPropagation();
			
			$("#main-nav").removeClass("open");
			
		});
    
        $(".fermer").on("click", function(e){
            e.stopPropagation();
            
            $("#main-nav").removeClass("open");
        });
		
	});

// Smooth scroll
jQuery(document).ready(function($) {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 900; // Durée de l'animation (en ms)
            console.log($(page).offset().top);
            console.log(page);
            console.log($(page));
			$('html, body').animate( { scrollTop: $(page)[0].offsetTop }, speed ); // Go
			return false;
		});
	});


// Smooth scroll top

$(document).ready(function($) {
        var btnScrollTop = $('#btn-scroll-top');
        var htmlBody = $("html, body");
        
      if ($(window).scrollTop()<300){
            btnScrollTop.hide();
        } else {
            btnScrollTop.show();
        }
    
        $(document).scroll(function(){
           if ($(window).scrollTop()<300){
                btnScrollTop.hide();
            } else {
                btnScrollTop.show();
            }
        });
    
		btnScrollTop.on('click', function() { // Au clic sur un élément
			var speed = 900; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: 0 }, speed ); // Go
			return false;
		});
});