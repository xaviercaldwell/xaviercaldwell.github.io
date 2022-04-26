"use strict";




$( document ).ready( () => {

    $("#submit").click( () => {
       
        const firstName = $("#fname").val();
        const lastName = $("#lname").val();
        const email = $("#email").val();
        const comment = $("#comment").val();
        const phone = $("#phone").val();
        let valid = true;
        
        
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const phonePattern2 = /^(\d{10}|\d{11})$/;

//first name
        
        if (firstName == "") { 
            $("#fname").next().text("*Required");
            valid = false;
        }
        else{
            $("#fname").next().text("*");
        }
    
//last name

        if (lastName == "") { 
            $("#lname").next().text("*Required");
            valid = false;
        }
        else{
            $("#lname").next().text("*");
        }
    
//email

        if (email == ""){
            $("#email").next().text("*Required");
            valid = false;
        }
        else if(!emailPattern.test(email)){
            $("#email").next().text("*Please enter a valid email-address");
            valid = false;
        }
        else{
            $("#email").next().text("*");
        }

//phone number

        if (phone == "" || (!phonePattern.test(phone) && !phonePattern2.test(phone))) {
            $("#phone").next().text("*Please enter a valid phone number in XXX-XXX-XXXX format");
            valid = false;
        }
        else{
            $("#phone").next().text("*");
        }

//comments

        if(comment ==""){
            $("#invalid_comment").text("*Required");
            valid=false;
        }
        else{
            $("#invalid_comment").text("*");
        }
    
        // submit the form if valid
        if (valid) {
            alert("Successfully submitted, thank you for your feedback");
            $("#contact").submit();
            $("#fname").val("");
            $("#lname").val("");
            $("#email").val("");
            $("#phone").val("");
            $("#comment").val("");
           
        }
    });

   
    
    $("#fname").focus();




});