$(document).ready(function(){

	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		$('.logo-header').css({
			'transform' : 'translate(0px, '+ wScroll /2 +'px)'
		});

		$('.front-robot').css({
			'transform' : 'translate(0px, '+ wScroll /15 +'%)'
		});

		$('.back-robot').css({
			'transform' : 'translate(0px, '+ wScroll /7 +'%)'
		});

		console.log(wScroll)

	});

	var accordion = $('.side-navbar-ul li:has(ul)');
	var bodyEl = $('body'),
	navToggle = bodyEl.find('.side-navbar'),
	navToggleSponsors = bodyEl.find('.side-navbar-sponsors'),
	btnSide1 = bodyEl.find('.btn-side-navbar-1'),
	btnSide2 = bodyEl.find('.btn-side-navbar-2'),
	pageContent = bodyEl.find('.content'),
	parallaxContent = bodyEl.find('.parallax-container'),
	navigarionBar = bodyEl.find('.container-fluid');

	navToggle.on('mouseover', function(e){
		bodyEl.toggleClass('active-nav');
		e.preventDefault();
	});

	navToggle.on('mouseout', function(e){
		bodyEl.toggleClass('active-nav');
		e.preventDefault();
	});

	navToggleSponsors.on('mouseover', function(e){
		bodyEl.toggleClass('active-nav-sponsors');
		e.preventDefault();
	});

	navToggleSponsors.on('mouseout', function(e){
		bodyEl.toggleClass('active-nav-sponsors');
		e.preventDefault();
	});

	btnSide1.on('click', function(e){
		bodyEl.toggleClass('rotate-arrow-1');
		e.preventDefault();
	});

	btnSide2.on('click', function(e){
		bodyEl.toggleClass('rotate-arrow-2');
		e.preventDefault();
	});

	pageContent.on('mouseover', function(e){
		e.preventDefault();
		if (accordion.hasClass('active')){
			accordion.removeClass('active');
			accordion.children('ul').slideUp();
		}
	});

	parallaxContent.on('mouseover', function(e){
		e.preventDefault();
		if (accordion.hasClass('active')){
			accordion.removeClass('active');
			accordion.children('ul').slideUp();
		}
	});

	navigarionBar.on('mouseover', function(e){
		e.preventDefault();
		if (accordion.hasClass('active')){
			accordion.removeClass('active');
			accordion.children('ul').slideUp();
		}
	});

	$('.side-navbar-ul li:has(ul)').click(function(e){

		e.preventDefault();

		if ($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).children('ul').slideUp();
		}
		else{
			$('.side-navbar-ul li ul').slideUp();
			$('.side-navbar-ul li').removeClass('active');
			$(this).addClass('active');
			$(this).children('ul').slideDown();
		}

	});

});