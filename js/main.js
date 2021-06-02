//Select element function

const selectElemnet = function (element) {
	return document.querySelector(element);
};

let menuTogler = selectElemnet('.menu-toggle');
let body = selectElemnet('body');

menuTogler.addEventListener('click', function () {
	body.classList.toggle('open');
});

// $(window).scroll(function () {

// 	var $scrollTop = $(this).scrollTop();
// 	if ($scrollTop > 0) {
// 		$("header").addClass("active");
// 		$("header .nav-list > ul > li > a").addClass("active");
// 		$("nav").addClass("active");
// 	}
// 	else {
// 		$("header").removeClass("active");
// 		$("header .nav-list > ul > li > a").removeClass("active");
// 		$("nav").addClass("active");
// 	}
// });

$(function(){
	var lastScrollTop = 0, data = 5;
	$(window).scroll(function(e){
	   var st = $(this).scrollTop();
	   
	   if(Math.abs(lastScrollTop - st) <= data){
		  return;
		}
		if ((st > lastScrollTop) && (lastScrollTop>0)){
	  $("header").css("top","-153.2px");
  
   } else {
	  $("header").css("top","0px");
   }
	   lastScrollTop = st;
	});
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


console.clear();
function FloorInfoBox__init() {
  $('.floor-info-box > ul > li').click(function() {
    const $this = $(this);

    // v1 : 클릭한 녀석의 부모의 자식
    // $this.parent().find(' > .active').removeClass('active');

    // v2 : 클릭한 녀석의 부모의 자식
    //$this.parent().children('.active').removeClass('active');

    // v3 : 나를 제외한 형제들
    $this.siblings('.active').removeClass('active');
    $this.addClass('active');
  });
}

FloorInfoBox__init();

function SliderBox1__init(no) {
  const swiper = new Swiper('.slider-box-1-' + no + ' .swiper-container', {
    loop: true,
    // If we need pagination
    pagination: {
      el: '.slider-box-1-' + no + ' .swiper-pagination',
      clickable: true
    },
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 1500, // 임시
    },
  });
  
  $('.slider-box-1-' + no).addClass('autoplay-started');
  $('.slider-box-1-' + no).removeClass('autoplay-stoped');
  
  $('.slider-box-1-' + no + ' .slider-box-1__btn-pause').click(function() {
    $('.slider-box-1-' + no).removeClass('autoplay-started');
    $('.slider-box-1-' + no).addClass('autoplay-stoped');
    swiper.autoplay.stop();
  });
  
  $('.slider-box-1-' + no + ' .slider-box-1__btn-resume').click(function() {
    $('.slider-box-1-' + no).addClass('autoplay-started');
    $('.slider-box-1-' + no).removeClass('autoplay-stoped');
    swiper.autoplay.start();
  });
}

SliderBox1__init(1);
SliderBox1__init(2);
SliderBox1__init(3);
SliderBox1__init(4);







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
			slidesPerView: 2,
			spaceBetween: 20,
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
	}


});
