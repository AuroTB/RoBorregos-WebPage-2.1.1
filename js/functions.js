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

(function(){

	var bodyEl = $('body'),
	navToggle = bodyEl.find('.side-navbar'),
	navToggleSponsors = bodyEl.find('.side-navbar-sponsors'),
	btnSide1 = bodyEl.find('.btn-side-navbar-1');

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

})();