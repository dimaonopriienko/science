$(document).ready(function() {

	
$('.popup').magnificPopup({type:'image',
 zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
});
$('.popup_c').magnificPopup();
$.stellar({
	responsive: true,
	horizontalOffset: 60
});

$(".carousel").owlCarousel({
	loop: true,
	responsive : {    
    0 : {
    items:1,
      nav: true
    }
	},
	navText : ""
});

function wResize()
 {
 	$("header").css("min-height",$(window).height());

 };	
 wResize();
 $(window).resize(function(){
 	wResize()
 });
$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
$(".bottom_phone .wrapper .tab").click(function() {
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

$(".contacts_top  .tab").click(function() {
		$(".contacts_top  .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths=$(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				magnificPopup.close(); 
				ths.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});
$(window).load(function() {
$(".top_header").animated("fadeInDown", "fadeOut");
$(".tabs_header").animated("flipInY", "fadeOut");
$(".profi_item").animated("fadeInRight", "fadeOut");
$(".s_profi form").animated("zoomInRight", "fadeOut");
$(".s_back h3").animated("fadeInUp", "fadeOut");
$("footer").animated("fadeInUp", "fadeOut");
});
