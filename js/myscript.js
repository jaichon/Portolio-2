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
	
});

