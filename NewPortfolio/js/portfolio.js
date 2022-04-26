$(document).ready( () =>{

exHeight = $("#initialphoto").css('height');

$(".iframeFun").css('height', exHeight); 


exWidth = $("#initialphoto").css('width');

$(".iframeFun").css('width', exWidth); 
});



$(window).resize(function() {         

    exHeight = $("#initialphoto").css('height');

    $(".iframeFun").css('height', exHeight); 
    
    
    exWidth = $("#initialphoto").css('width');
    
    $(".iframeFun").css('width', exWidth); 

});
