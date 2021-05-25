//Select element function

const selectElemnet = function (element) {
	return document.querySelector(element);
};

let menuTogler = selectElemnet('.menu-toggle');
let body = selectElemnet('body');

menuTogler.addEventListener('click', function () {
	body.classList.toggle('open');
});

$(window).scroll(function () {

	var $scrollTop = $(this).scrollTop();
	if ($scrollTop > 0) {
		$("header").addClass("active");
		$("header .nav-list > ul > li > a").addClass("active");
		$("nav").addClass("active");
	}
	else {
		$("header").removeClass("active");
		$("header .nav-list > ul > li > a").removeClass("active");
		$("nav").addClass("active");
	}
});

$(document).ready(function () {
	$("sc01-img")
});

var swiper = new Swiper('.swiper1', {
	loop: true,
	autoplay: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev',
	},
});


$(".box01").addClass("active");
$(".box").click(function () {
	var good = $(this).index();
	$(".box").removeClass("active");
	$(".box").eq(good).toggleClass("active");
});

var swiper = new Swiper(".sub-swiper-1", {
	cssMode: true,
	loop: true,
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	},
	mousewheel: true,
	keyboard: true,
});


$(document).ready(function () {
	// $(".box01").addClass("active");
	$(".family-site-box").click(function () {
		$(".family-site-box").toggleClass("on");
	});
});

var swiper = new Swiper('.swiper2', {
	slidesPerView: 3,
	spaceBetween: 15,
	loop: true,
	autoplay: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev',
	},
	breakpoints: {
		1340: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		520: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
	}


});
