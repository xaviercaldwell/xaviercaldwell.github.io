"use strict";


    
//js for main page(index)

$( document ).ready( () => {
       

    $("#join_list").click(() => {
        // get values user entered in textboxes
        const email1 = $("#email_1").val();
        const email2 = $("#email_2").val();
        const firstName = $("#first_name").val();
        let valid = true;

        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        

        if (email1 == "" || !emailPattern.test(email1)) { 
            $("#invalid1").text("Please enter a valid email-address.");
            valid = false;
           
        }
        else{
                $("#invalid1").text("*");
            }
        
    
        if (email2 == "") { 
            $("#invalid2").text("Required field.");
            valid = false;
        }
        else{
            if (email2 != email1) { 
                $("#invalid2").text("Emails must match.");
                valid = false;
            }
            else{
            $("#invalid2").text("*");
        }
        }
       
       
    
        if (firstName == "") {
            $("#invalid3").text("Field is required.");
            valid = false;
        }
        else{
            $("#invalid3").text("*");
        }


        if (!$("#terms").prop('checked')) {
            $("#invalid4").text("You must agree to the terms of service."); 
            valid = false;
        }
        else{
            $("#invalid4").text("*");
        }
    
        // submit the form if error message is an empty string
        if (valid) {
            alert("Successfully submitted, thank you!");
            $("#registration").submit();
            $("#email_1").val("");
            $("#email_2").val("");
            $("#first_name").val("");
        }
    });

    $("#clear_form").click( () => {
       
        $("#email_1").val("");
        $("#email_2").val("");
        $("#first_name").val("");
        $("#terms").prop('checked', false);
        $("#dog").prop('checked', false);
        $("#cat").prop('checked', false);
        $("#other").prop('checked', false);
        $("#email1").next().text("*");
        $("#email2").next().text("*");
        $("#firstName").next().text("*");
        $("#terms").next().text("*");
        $("#email_1").focus();
    });
    







});
