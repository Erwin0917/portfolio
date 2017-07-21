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
        if($(window).width() < "1200"){     
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
                $(".nav-container").stop().fadeIn("slow", function(){})
            }else {
                btn.text("Menu");
                $(".nav-container").stop().fadeOut("slow", function(){})
            }
           
    }
   
    btn.click(toggleMobileMenu);

    

   debounce(resizeCheck(window, function(){ // jesli menu w mobile ukryte i jest powiekszenie okna przeglądarki to usuniecie display: none
        if( !$('body').hasClass("mobile") ){
        $(".nav-container").show();
        
    }
    }), 200 );         
       
    
    


});



// smaller menu 
function smallerMenu(){
    var menu = $(".nav-container"),
        headerHeight = $("#header").innerHeight(),
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

})(jQuery);