$(document).ready(function(){
	//nav opacity 
	$(window).scroll(function () {
		if($(window).scrollTop() > 100) {
			$('nav').addClass("bg-nav");
			$('nav').removeClass("border-nav");
		} else {
			$('nav').removeClass("bg-nav");
			$('nav').addClass("border-nav");
		}
	});

	//Smooth scrolling
	$('a[href*="#"]')// Select all links with hashes
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
	// On-page links
	if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		&& 
		location.hostname == this.hostname
	) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 500, function() {
			var $target = $(target);
			$target.focus();
			if ($target.is(":focus")) { 
			return false;
			} else {
			$target.attr('tabindex','-1');
			$target.focus();
			};
		});
		}
	}
	}); //Smooth Scrolling
	
	//carousel
	$('.carousel').carousel({
		interval: 10000
	})

	//portfolio gallery
	$(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
		// $('.filter[filter-item="'+value+'"]').removeClass('hidden');
		// $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
		$(".filter").not('.'+value).hide('3000');
		$('.filter').filter('.'+value).show('3000');
				
			}
		});
			
		if ($(".filter-button").removeClass("active")) {
		$(this).removeClass("active");
		}
		$(this).addClass("active");


		//Modal
		// $('.modalphotos img').on('click', function() {
		// 	$('#modal').modal( {
		// 		show: true,
		// 	})

		// 	var mysrc = $(this).attr('src');
		// 	$('#modalimage').attr('src', mysrc);
		// });

		// $('#modalimage').on('click', function() {
		// 	$('#modal').modal('hide');
		// });
});

