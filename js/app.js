/* Iniciamos WOW */
new WOW().init();

/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
var scroll = new SmoothScroll('a[href*="#"]', {
	// Speed & Easing
	speed: 1000, // Integer. How fast to complete the scroll in milliseconds
	offset: 90 // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels

});

/*----------------------------------
Iniciamos KC FAB)
--------------------------------*/
var links = [
	{
	  "bgcolor":"#03A9F4",
	  "icon":"+"
	},

	{
	  "url":"blog.html",
	  "bgcolor":"#DB4A39",
	  "color":"#fffff",
	  "icon":"<i class='fas fa-door-open'></i>",
	  "target":"_blank"
	},

	{
		"url":"#",
		"bgcolor":"#1DA1F2",
		"color":"#fffff",
		"icon":"<i class='fab fa-twitter'></i>",
		"target":"_blank"
	  },


	{
	  "url":"#",
	  "bgcolor":"#4267B2",
	  "color":"#fffff",
	  "icon":"<i class='fab fa-facebook-f'></i>"
	}
	]
	$('.kc_fab_wrapper').kc_fab(links);