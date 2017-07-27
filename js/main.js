(function($){

function debounce(callback, wait) {
	var timeout;
	return function() {
		var ctx = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
		    callback.apply(ctx, args);
		}, wait || 100);
	};
};
function resizeCheck(obj, callback){
    $(obj).resize(callback);
}



$(document).ready(function() {
    //Loader ---->
    $(".loader").stop().fadeOut("slow", function(){
        $(".loader").addClass("hidden");
    });
    
    

   


    // add mobile class to body
    function addMobileClass(){
        if($(window).width() < "1250"){     
         $("body").addClass("mobile");
        }else{
         $("body").removeClass("mobile");   
        }
    };

    debounce(resizeCheck(window,addMobileClass), 200);

    addMobileClass();


    //mobile menu ---->
    var btn = $(".nav-mobile-btn");

    function toggleMobileMenu(){
        if(btn.text() == "Menu"){
                btn.text("Zamknij");
                $(".nav-container").addClass("open")
            }else {
                btn.text("Menu");
                $(".nav-container").removeClass("open")
            }        
    }
    
    
   
    $(window).click(function(e){
        let target = e.target;   
        if( ( $(target).hasClass("nav-mobile-btn") == btn.hasClass("nav-mobile-btn") || $(target).hasClass("nav-elem") ) && $("body").hasClass("mobile")   ){
            toggleMobileMenu();
        }     
    });
   

    

   debounce(resizeCheck(window, function(){ // jesli menu w mobile ukryte i jest powiekszenie okna przeglądarki to usuniecie display: none
        if( !$('body').hasClass("mobile") ){
        $(".nav-container").show();
        
    }
    }), 200 );         
       
    
    


});



// smaller menu  ---- set smaller menu after scroll on section 2. 
function smallerMenu(){
    var menu = $(".nav-container"),
        headerHeight = $("#home").innerHeight(),
        scrollPos = $(window).scrollTop();

    $(window).scroll(function (e) {
        var scrollPos = $(window).scrollTop(); 
        if(scrollPos >= (headerHeight - 250) ){
        menu.addClass("nav--smaller");
        }else menu.removeClass("nav--smaller");
        
    });
    if(scrollPos >= headerHeight){
        if(scrollPos >= (headerHeight - 250) ){
        menu.addClass("nav--smaller");
        }else menu.removeClass("nav--smaller");
    }
    
}

smallerMenu();



// smooth scroll

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          
          
        });
      }
    }
  });


  //disable link
  $("a").click(
      function(e){
        let target = e.target;

        if( $(target).hasClass("disable") )
            event.preventDefault();
      }
  )




})(jQuery);