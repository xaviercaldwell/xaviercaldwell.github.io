"use strict";


$(document).ready( () => {



$("#faqs h2").click( evt => {
    const h2 = evt.currentTarget;

    $(h2).toggleClass("down");

    if ($(h2).attr("class") != "down") {
        $(h2).next().slideUp(500);
        $(h2).next().fadeOut();
        
          
       }
       else {
        $(h2).next().slideDown(500);
        $(h2).next().fadeIn();
      
       }
    
    evt.preventDefault();
}); // end click





});