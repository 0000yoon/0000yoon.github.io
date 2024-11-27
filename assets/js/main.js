/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);


//Swiper [s]
//var atc01Swiper = new Swiper("#atc01 .slide", {
//  effect: "creative",
//  loop : "true",
//  slidesPerView: '3',
//  grabCursor: true,
//  centeredSlides: true,
//  slidesPerView: "auto",
//  speed:600,
//  autoplay: {
//    delay: 1800,
//    disableOnInteraction: false,
//  },
//  creativeEffect: {
//    limitProgress:1,
//    prev: {
//      opacity:1,
//      scale: 0.9,
//      rotate:[0,25,0],
//      translate: ["-50%", 0, -200],
//    },
//    next: {
//      scale: 0.9,
//      rotate:[0,-25,0],
//      translate: ["50%", 0, -200],
//    },
//  },
//  pagination: {
//    el: '#atc01 .pager_dot',
//    bulletClass: 'bullet',
//    bulletActiveClass: 'active',
//    type: 'bullets',
//    clickable: true
//  },
//  breakpoints: {
//    768: {
//      creativeEffect: {
//        limitProgress:2,
//        prev: {
//          opacity:0,
//        },
//      },
//    },
//  },
//});
//Swiper [e]