/*
===========================================================================
 EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Template Name   : Benzene - Personal Portfolio Template
 Author          : bootWeb
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Copyright (c) 2017 - bootWeb - https://themeforest.net/user/bootweb
===========================================================================
*/

/*================================================
            Table of contents  
==================================================
 
1. Preloader
2. Dynamic Colors
3. Background-image flickering solution for mobile
4. Parallax
5. Type js
6. Wow js
7. Active Scroll
8. Smooth scroll
9. Progress Bar
10. Magnific Popup
11. Mixitup
12. Hoverdir
13. Counter
14. OWL Carousel
15. Contact form
16. Scroll to top
17. Scroll NavBar

====================================================
            End table content 
===================================================*/

$(function () {
	"use strict";

	var $window = $(window),
	$body = $('body');

	jQuery(document).ready(function($){

    	//Preloader
    	$('.spinner').fadeOut(); 
    	$('.preloader').delay(350).fadeOut(500);
    	$body.delay(350).css({'overflow':'visible'});

//Dynamic Colors
$(".option").on("click",function(){
	$("#box").toggleClass("open")}),
$("body").on("click",function(o){
	$(o.target).closest("#box").length||$(".box").removeClass("open")
});

$('.green').on("click", function () {
	$('#pagestyle').attr("href", "css/style.css");
});
$('.peach').on("click", function () {
	$('#pagestyle').attr("href", "css/peach.css");
});
$('.purple').on("click", function () {
	$('#pagestyle').attr("href", "css/purple.css");
});
$('.blue').on("click", function () {
	$('#pagestyle').attr("href", "css/blue.css");
});
$('.orange').on("click", function () {
	$('#pagestyle').attr("href", "css/orange.css");
});
$('.red').on("click", function () {
	$('#pagestyle').attr("href", "css/red.css");
});

//Background-image flickering solution for mobile
var bg = jQuery("#home");
function resizeBackground() {
	bg.height(jQuery(window).height() + 60);
}
resizeBackground();

//Parallax
$(function(){
	$('body').stellar({
		responsive: true,
		positionProperty: 'position',
		horizontalScrolling: false
	});
});

//Type js
var element = $(".element");
$(function() {
	element.typed({
		strings: ["Gentleman.", "Coder.", "Wannabe Philosopher.", "Student.", "Hacker in Training."],
		typeSpeed: 100,
		loop: true,
	});
});

//Wow js
new WOW().init(); 

//Active Scroll
$(document).on("scroll", onScroll);
function onScroll(event){
	var scrollPos = $(document).scrollTop();
	$('.navbar-nav a').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('.navbar-nav li a').removeClass("active");
			currLink.addClass("active");
		}
		else{
			currLink.removeClass("active");
		}
	});
} 

//Smooth Scroll
$(".nav a,#home a,#about a,#quote a,[href='#body']").on('click', function(event) {
	if (this.hash !== ""){
		event.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 900, function(){
			window.location.hash = hash;
		});
	}
});

//Progress Bar
var startSkills = $('.single-skill');
startSkills.waypoint(function () {
	$(this).each(function () {
		var data = $(this).data('percent');
		$(this).find('.skill-bar-overlay').animate({
			width: data + "%"
		}, 2000);

		$(this).find('span').addClass('show').animate({
			width: data + (-20) + "%"
		}, 2000);
	});
}, {
	triggerOnce: true,
	offset: 'bottom-in-view'
});

//Magnific Popup
$('#parent').magnificPopup({
	delegate: 'a.gallery',
	type: 'image',
	closeOnContentClick: true,
	gallery: {enabled: true}
});

//Mixitup
$('#parent').mixItUp();

//Hoverdir
if ( jQuery().hoverdir ) {
	jQuery( '.da-thumbs li' ).each( function() {
		jQuery( this ).hoverdir();
	});
}

//Counter
$('.counter').counterUp({
	delay: 1,
	time: 400
});

//Owl Carousel
$("#owl-testimonial").owlCarousel({
	navigation: false,
	pagination: true,
	slideSpeed: 800,
	paginationSpeed: 800,
	smartSpeed: 500,
	autoplay: false,
	singleItem: true,
	loop: false,
	responsive:{
		0:{
			items:1
		},
		680:{
			items:2
		},
		1000:{
			items:3
		}
	}
});
$("#partners").owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	margin: 30,
	autoplay: true,
	autoplayTimeout: 1300,
	smartSpeed: 500,
	animateOut: 'slideOutDown',
	animateIn: 'slideInDown',
	responsive: {
		0:{
			items:1
		},
		320:{
			items:2
		},
		520:{
			items:3
		},
		860:{
			items:5
		},
		1000:{
			items:6
		}
	}
});

//Contact form
var validator=$("#form").validate({
	rules: {
		name: "required",
		email: {
			required: true,
			email: true
		},
		subject: "required",
		message: "required",
	},

	messages: {
		name: "Please enter your name",
		email: "Please enter a valid email address",
		subject: "Please enter a subject",
		message: "Please enter your message"
	}
});
$(".send-btn").on("click touchstart", function () {
	$("#form").css("color", "#ac4b49");
});

//Scroll-to-up
$('#scroll-up').hide();
$window.on("scroll", function () {
	if ($window.scrollTop() > 300) {
		$('#scroll-up').fadeIn();
	} else {
		$('#scroll-up').fadeOut();
	}
  //Scroll NavBar
  if ($window.scrollTop() > 160) {
  	$('#nav').addClass("scroll");
  } else {
            //remove the background property
            $('#nav').removeClass("scroll");
        }
    });
$('#scroll-up').on("click", function () {
	$("html, body").animate({
		scrollTop: 0
	}, 1000);
	return false;
});

}(jQuery));
});