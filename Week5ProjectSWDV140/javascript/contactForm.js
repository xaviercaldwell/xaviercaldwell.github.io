"use strict";




$( document ).ready( () => {

    $("#submit").click( () => {
        // get values user entered in textboxes
        const firstName = $("#fname").val();
        const lastName = $("#lname").val();
        const email = $("#email").val();
        const comment = $("#comment").val();
        let valid = true;
        
        
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;

        
        if (firstName == "") { 
            $("#fname").next().text("Required");
            valid = false;
        }
        else{
            $("#fname").next().text("*");
        }
    
        if (lastName == "") { 
            $("#lname").next().text("Required");
            valid = false;
        }
        else{
            $("#lname").next().text("*");
        }
    
        if (email == "" || !emailPattern.test(email)) {
            $("#email").next().text("Please enter a valid email-address");
            valid = false;
        }
        else{
            $("#email").next().text("*");
        }

        if(comment ==""){
            $("#comment").next().text("Required");
            valid=false;
        }
        else{
            $("#comment").next().text("*");
        }
    
        // submit the form if valid
        if (valid) {
            alert("Successfully submitted, thank you for your feedback");
            $("#contact").submit();
            $("#fname").val("");
            $("#lname").val("");
            $("#email").val("");
            $("#comment").val("");
        }
    });

   
    
    $("#fname").focus();




});