/* Подключение модальных окон */

//modal
$('*[data-modal="open"]').on('click', function() {
    $(".js-overlay-campaign-registration").fadeIn();
});

$('*[data-modal="close"]').on('click', function() {
    $('.js-overlay-campaign').fadeOut();
	$('.js-overlay-close').fadeOut();
});

$('*[data-modal="openvideo0"]').on('click', function() {
    $(".js-overlay-video0").fadeIn();
});

$('*[data-modal="openvideo1"]').on('click', function() {
    $(".js-overlay-video1").fadeIn();
});

$('*[data-modal="openvideo2"]').on('click', function() {
    $(".js-overlay-video2").fadeIn();
});

$('*[data-modal="openvideo3"]').on('click', function() {
    $(".js-overlay-video3").fadeIn();
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		$('.js-overlay-close').fadeOut();
	}
});

// открыть по таймеру 
$(window).on('load', function () { 
	setTimeout(function(){
		if($('.js-overlay-campaign').hasClass('disabled')) {
			return false;
		} else {
			
			$(".js-overlay-campaign").fadeIn();
		}
	}, 180000);
});



/* Подключение карусели */
$('.owl-command').owlCarousel({
	center: true,
	loop:true,
	margin:10,
	nav:true,
	dots:false,
	navText : ["",""],
	responsive:{
	    0:{
	        items:1
	    },
	    600:{
	        items:1
	    },
	    1000:{
	        items:3
	    }
	}
})


/*При прокрутке текст появляется постепенно*/

// Slide in elements on scroll
$(window).scroll(function() {
    $(".slideanimation").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 700) {
            $(this).addClass("slide");
        }
    });
});
 

/*Добавить стиль при прокрутке*/

jQuery(function (f) {
    f(window).scroll(function () {
        f('header')[(f(this).scrollTop() > 10 ? "add" : "remove") + "Class"]("scroll-header");
    });
});



/* Кнопки преходят в блок регистрации*/

$(document).ready(function(){
  // Add smooth scrolling to all links
  $('.scroll').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
	$hamburger.toggleClass("is-active"); 
});

function facechange (objName) {
	if ( $(objName).css('display') == 'none' ) {
	$(objName).animate({height: 'show'}, 400);
	} else {
		$(objName).animate({height: 'hide'}, 50);
	}
};


/*Пункты меню - переходят на блоки с инф. меню*/