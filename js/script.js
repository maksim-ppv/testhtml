//MASKS//
//'+7(999) 999 9999'
//'+38(999) 999 9999'
//'+375(99)999-99-99'
$.each($('input.phone'), function(index, val) {
    $(this).attr('type','tel');
    $(this).focus(function(){
        $(this).inputmask('+375(99)999-99-99',{clearIncomplete: true,clearMaskOnLostFocus: false,
            "onincomplete": function(){maskclear($(this));}
        });
        $(this).addClass('focus');
        $(this).parent().addClass('focus');
        $(this).parent().removeClass('err');
        $(this).removeClass('err');
    });
});
$('input.phone').focusout(function(event) {
    maskclear($(this));
});



//POPUP
function popupOpen(pl, v) {
	$('.popup').removeClass('active').hide();
	if (!$('.menu__body').hasClass('active')) {
	}
	if (!isMobile.any()) {
		$('body').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() }).addClass('lock');
	} else {
		setTimeout(function () {
			$('body').addClass('lock');
		}, 300);
	}
	$('.popup-' + pl).fadeIn(300).delay(300).addClass('active');

}
function popupClose() {
	$('.popup').removeClass('active').fadeOut(300);
	if (!$('.menu__body').hasClass('active')) {
		if (!isMobile.any()) {
			setTimeout(function () {
				$('body').css({ paddingRight: 0 });
			}, 200);
			setTimeout(function () {
				$('body').removeClass('lock');
			}, 200);
		} else {
			$('body').removeClass('lock');
		}
	}
}
$('.popup-close,.popup__close').click(function (event) {
	popupClose();
	return false;
});
$('.popup').click(function (e) {
	if (!$(e.target).is(".popup>.popup-content>.popup__txt*") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
		popupClose();
		return false;
	}
});
$(document).on('keydown', function (e) {
	if (e.which == 27) {
		popupClose();
	}
});


//SLIDERS
if($('.slider').length>0){
	$('.slider').slick({
	autoplay: true,
	//infinite: false,
	dots: true,
	arrows: false,
	accessibility:false,
	slidesToShow:1,
	speed: 1500,
	autoplaySpeed: 3000,
	//asNavFor:'',
	//appendDots:
	//appendArrows:$('.mainslider-arrows .container'),
	// nextArrow:'<button type="button" class="slick-next"></button>',
	// prevArrow:'<button type="button" class="slick-prev"></button>',

	responsive: [{
		breakpoint: 768,
		settings: {	variableWidth: true,
		centerMode: true}
		}]
	});
}


//windows switching
$(document).ready(function() {
	$("#windows_controls").on('click', 'li', function() {
	  $("#windows img").removeClass("windows_active");
	  $("#windows h3").removeClass("windows_active");
  
	  var newImage = $(this).index();
  
	  $("#windows img").eq(newImage).addClass("windows_active");
	  $("#windows h3").eq(newImage).addClass("windows_active");
  
	  $("#windows_controls li").removeClass("calc__window_active");
	  $(this).addClass("calc__window_active");
	});
  });

//wow on
wow = new WOW({
	mobile: false,
	offset: 80
  
  })
wow.init();

//parallax
var scene = document.getElementById('header');
var parallaxInstance = new Parallax(scene);