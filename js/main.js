$("document").ready(function(){ 

    $("#eye-img").mouseenter(function(){
        $(this).attr('src','icons/okohover.png');      
    });     
    $("#eye-img").mouseleave(function(){
        $(this).attr('src','icons/oko.png');      
    }); 

    $("#weight-img").mouseenter(function(){
        $(this).attr('src','icons/wagahover.png');      
    });     
    $("#weight-img").mouseleave(function(){ 
        $(this).attr('src','icons/waga.png');      
    }); 

    $("#eye-img2").mouseenter(function(){
        $(this).attr('src','icons/okohover.png');      
    });     
    $("#eye-img2").mouseleave(function(){
        $(this).attr('src','icons/oko.png');      
    }); 

    $("#weight-img2").mouseenter(function(){
        $(this).attr('src','icons/wagahover.png');      
    });     
    $("#weight-img2").mouseleave(function(){ 
        $(this).attr('src','icons/waga.png');      
    }); 

});