(function($){

$(document).ready(function() {
    //Loader ---->
    $(".loader").stop().fadeOut("slow", function(){
        $(".loader").addClass("hidden");
    });
    //Loader End ----
    

    //mobile menu ---->
    var btn = $(".nav-mobile-btn");
    
    btn.click(function(){
        if(btn.text() == "Menu"){
            btn.text("Zamknij");
            $(".nav-container").stop().fadeIn("slow", function(){})
        }else {
            btn.text("Menu");
            $(".nav-container").stop().fadeOut("slow", function(){})
        }
    });
    $(".nav-container a").click(function(){
            btn.text("Menu");
            $(".nav-container").stop().fadeOut("slow", function(){})
    });
        
    
    


});

})(jQuery);