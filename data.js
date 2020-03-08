;(function($) {
    "use strict";
    
    var nav_offset_top = $('header').height(); 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.main_menu_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".main_menu_area").addClass("navbar_fixed");
                } else {
                    $(".main_menu_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    
    
    
    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider(){
        if ( $('#main_slider').length ){
            $("#main_slider").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"normal",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:992,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 0,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 0,
                            v_offset: 0
                        }
                    },
                    bullets: {
                        enable:true,
                        hide_onmobile:true,
                        hide_under:768,
                        style:"hesperiden",
                        hide_onleave:false,
                        direction:"vertical",
                        h_align:"left",
                        v_align:"bottom",
                        h_offset:380,
                        v_offset:0,
                        space:10,
                        tmp: "",
                    },
                },
                responsiveLevels:[4096,1320,1199,992,767,480],
                gridwidth:[1170,1170,960,720,700,300],
                gridheight:[950,950,950,700,500,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider();
  
    
    /*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimoninals_carousel(){
        if ( $('.testimonials_slider').length ){
            $('.testimonials_slider').owlCarousel({
                loop:true,
                margin: 130,
                items: 3,
                nav:false,
                autoplay: false,
                smartSpeed: 1500,
                dots:true,
                center: true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        center: false,
                        margin: 0 
                    },
                    700: {
                        items: 2,
                        center: false,
                        margin: 30 
                    },
                    992: {
                        items: 3,
                        margin: 70,
                    },
                    1200: {
                        items: 3,
                        margin: 130,
                    }
                }
            })
        }
    }
    testimoninals_carousel();
    
    /*----------------------------------------------------*/
    /*  Shap Slider
    /*----------------------------------------------------*/
    function shap_carousel(){
        if ( $('.shap_slider_inner').length ){
            $('.shap_slider_inner').owlCarousel({
                loop:true,
                margin: 0,
                items: 1,
                nav:false,
                autoplay: false,
                smartSpeed: 1500,
                dots:true,
                center: true
            })
        }
    }
    shap_carousel();
    
   
    /*----------------------------------------------------*/
    /*  Skill Bar
    /*----------------------------------------------------*/
    function progressBarConfig () {
	  var progressBar = $('.progress');
	  if(progressBar.length) {
	    progressBar.each(function () {
	      var Self = $(this);
	      Self.appear(function () {
	        var progressValue = Self.data('value');

	        Self.find('.progress-bar').animate({
	          width:progressValue+'%'           
	        }, 1000);

	        Self.find('.number').countTo({
	          from: 0,
	            to: progressValue,
	            speed: 1000
	        });
	      });
	    })
	  }
	}
    progressBarConfig ();
    
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    
    /*----------------------------------------------------*/
    /*  portfolio_isotope
    /*----------------------------------------------------*/
    function home_gallery(){
        if ( $('.ms_portfolio_inner').length ){
            // Activate isotope in container
            $(".ms_portfolio_inner").imagesLoaded( function() {
                $(".ms_portfolio_inner").isotope({
                    itemSelector: '.ms_p_item',
                    layoutMode: 'masonry',
                    percentPosition:true,
                   // Script do navegador cruzado escrito por Jim Stiles
	// código adicional para exibir a data no formato dia do mês, ano
	var lutext;
	var lutime;
	var ludm;
	var ludd;
	var ludy;
	function sstr (a, b) {// extrai substrings
		ret = lutime.substring (a, b);
		if (ret == "Jan" || ret == "01") ret = "1";
		if (ret == "Feb" || ret == "02") ret = "2";
		if (ret == "Mar" || ret == "03" || ret == "Mrz") ret = "3";
		if (ret == "abr" || ret == "04") ret = "4";
		if (ret == "Maio" || ret == "05" || ret == "Mai") ret = "5";
		if (ret == "Jun" || ret == "06") ret = "6";
		if (ret == "Jul" || ret == "07") ret = "7";
		if (ret == "Ago" || ret == "08") ret = "8";
		if (ret == "Set" || ret == "09") ret = "9";
		if (ret == "Oct" || ret == "Ok") ret = "10";
		if (ret == "Nov") ret = "11";
		if (ret == "Dez" || ret == "Dez") ret = "12";
		return ret;
	}
	lutime = sem escape (document.lastModified);
	if (lutime.length == 17) {// Netscape 3 e superior, Internet Explorer 4
	ludm = sstr (0,2);
	ludd = sstr (3,5);
	ludy = sstr (6,8);
	}

        if (lutime.length == 19) {// Netscape 3 e superior, Internet Explorer 4 e superior, ano de 4 dígitos
        ludm = sstr (0,2);       
        ludd = sstr (3,5);       
        ludy = sstr (6,10);
        }

	if (lutime.length == 25 || lutime.length == 24) {// Netscape 2
	ludm = sstr (4,7);
	ludd = sstr (8,10);
	ludy = sstr (20,24);
	}
	if (lutime.length == 29) {// Opera 3
	ludm = sstr (8,11);
	ludd = sstr (5,7);
	ludy = sstr (12,16);
	}
	if (lutime.length == 23) {// Internet Explorer 3
	ludm = sstr (3,6);
	ludd = sstr (7,9);
	ludy = sstr (19,23);
	}
	lutext = "";

	monthName = nova matriz (12)
	monthName [1] = '/ 01 /'
	monthName [2] = '/ 02 /'
	monthName [3] = '/ 03 /'
	monthName [4] = '/ 04 /'
	monthName [5] = '/ 05 /'
	monthName [6] = '/ 06 /'
	monthName [7] = '/ 07 /'
	monthName [8] = '/ 08 /'
	monthName [9] = '/ 09 /'
	monthName [10] = '/ 10 /'
	monthName [11] = '/ 11 /'
	monthName [12] = '/ 12 /'
	yearNow = null
	if (ludy.length == 2) {
	if (ludy> = 90) {
	yearNow = 19
	}
	outro {
	yearNow = 20
	}
	}
	else yearNow = ""
	lutext + = ludd + "" + monthName [ludm] + "" + yearNow + ludy + "";

	document.write ("" + lutext); 
	// -> - 

