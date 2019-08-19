(function () {
	"use strict";
	

	/*=== dropdown-arrow-icon ===*/

		// Toggle-menu
		$('.show-menu-btn').click(function(){
			$('.menu').toggleClass('active')
		});
		// Remove-Menu
		$('.hide-menu-btn').click(function(){
			$('.menu').removeClass('active')
		});
		// list item click to Remove-menu
		$('ul li').click(function(){
			$('.menu').removeClass('active')
		});


	/* easing-smoth-Scroll
	=====================*/
	var page_scroll = $('a.page-scroll');
	page_scroll.on('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 10
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});


/* Increment/Decrement count
============================*/
$(function(){
	$('input[type="number"]').niceNumber();
});



/* Time Picker js
============================*/
$(function() {
	$('[name="time"]').timeselector({
		min: '09:30',
		max: '18:30'
	})
});

/* Aos Effict
=====================*/
$(document).ready(function () {
	AOS.init({
		duration: 1500,
	})
})	

/* Date Picker
=====================*/
$("#datepicker1").datepicker();
//    $("#datepicker2").datepicker();
//    $("#datepicker3").datepicker();

/*baner-slider*/
$('.baner-slide').owlCarousel({
	loop: true,
	autoplay: true,
	autoplayTimeout: 3000,
	// animateOut: 'slideInUp',
	autoplayHoverPause: true,
	autoplaySpeed: true,
	dots: true,
	nav: true,
	navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
	responsive: {
		0: {
			items: 1,
			nav: false
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			
		}
	}
})

/*Food-owl-slider*/
$('.food-slide').owlCarousel({
	loop: true,
	autoplay: true,
	// animateOut: 'fadeOut',
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	autoplaySpeed: true,
	nav: true,
	navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
})

/*Best-offer-slick-slider*/
$('.best-offer-data').slick({
	nextArrow: false,
	prevArrow: false,
	dots: false,
	loop: true,
	autoplay: true,
	slidesToShow: 4,
	infinite: true,
	slidesToScroll: 1,
	responsive: [{
		breakpoint: 1024,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,

		}
	},

	{
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,

		}
	},
	{
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
		}
	}

	]
});

/*about-client-feedback-slick-slider*/
$('.about-client-feedback').slick({
	nextArrow: false,
	prevArrow: false,
	dots: false,
	loop: true,
	autoplay: false,
	slidesToShow: 1,
	asNavFor: '.about-client',
	infinite: true,
	slidesToScroll: 1,
	responsive: [{
		breakpoint: 1024,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,

		}
	},

	{
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,

		}
	},
	{
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,

		}
	}

	]
});

$('.about-client').slick({
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	dots: false,
	loop: true,
	asNavFor: '.about-client-feedback',
	autoplay: true,
	slidesToShow: 1,
	infinite: true,
	slidesToScroll: 1,
	responsive: [{
		breakpoint: 1024,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,

		}
	},

	{
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,

		}
	},
	{
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
		}
	}

	]
});

/* Backt-to-Top-button
================================*/
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top').fadeOut('slow');
	}
});

$('.back-to-top').click(function(){
	$('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
	return false;
});


})();