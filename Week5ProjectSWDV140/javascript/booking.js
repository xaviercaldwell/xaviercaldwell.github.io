"use strict";
/*
const today = new Date();
//need mega help doing 1. Date picking and comparing, how to handle the time. and 2. Getting the checkboxes to work
const dategetter = someday =>{
    const today = new Date();
    let dd = String(today. getDate()). padStart(2, '0');
    let mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
    let yyyy = today. getFullYear();
    ​
    today = mm + '/' + dd + '/' + yyyy;
    return today;
}*/



$(function(){

    var requiredCheckboxes = $(':checkbox[required]');

    requiredCheckboxes.change(function(){

        if(requiredCheckboxes.is(':checked')) {
            requiredCheckboxes.removeAttr('required');
        }

        else {
            requiredCheckboxes.attr('required', 'required');
        }
    });

});

$( document ).ready( () => {

    $("#submit").click( () => {
        // get values user entered in textboxes
        const firstName = $("#fname").val();
        const lastName = $("#lname").val();
        const email = $("#email").val();
        const phone = $("#phone").val();
        const address = $("#address").val();
        const state = $("#state").val();
        const zip = $("#zip").val();

        //declaring all date values later in the js
        
        
        

        let valid = true;
        
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const phonePattern2 = /^(\d{10}|\d{11})$/;
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const zipPattern = /^\d{5}(-\d{4})?$/;
        const statePattern = /^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$/;

        
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
            console.log("email bad")
        }
        else{
            $("#email").next().text("*");
        }

        if (phone == "" || (!phonePattern.test(phone) && !phonePattern2.test(phone))) {
            $("#phone").next().text("Please enter a valid phone number in XXX-XXX-XXXX format");
            valid = false;
        }
        else{
            $("#phone").next().text("*");
        }

        if(address == ""){
            $("#address").next().text("Required");
            valid = false;
        }
        else{
            $("#address").next().text("*");
            
        }

        if(state == "" || !statePattern.test(state, 'i')){
            $("#state").next().text("Please enter a valid state in XX Format");
            valid = false;
        }
        else{
            $("#state").next().text("*");
        }

        if(zip == "" || !zipPattern.test(zip)){
            $("#zip").next().text("Please enter a valid Zip code in XXXXX or XXXXX-XXXX format");
            valid = false;
        }
        else{
            $("#zip").next().text("*");
        }


/*
      
        //date validation
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();

        if (dd < 10) {
          dd = '0' + dd;
        }

        if (mm < 10) {
        mm = '0' + mm;
        } 
    
        today = yyyy + '-' + mm + '-' + dd;
        $("#startDay").prop('min', today);

        /*
            if(startDate < today){
               startDate.next().text("Please select a valid date (in the future or today)")
            }
            else{
                alert(startDate)
            }

        */

        

        
    
        // submit the form if valid
        if (valid) {
            alert("Successfully submitted, thank you for your feedback");
           
            $("#book").submit();
            $("#fname").val("");
            $("#lname").val("");
            $("#email").val("");
            $("#phone").val("");
            $("#address").val("");
            $("#state").val("");
            $("#zip").val("");
            $("#other").prop('checked', false);
            $("#cat").prop('checked', false);
            $("#dog").prop('checked', false);
            $("#comment").val("");
            $("#startDay").val("");
            $("#startTime").val("");
            $("#endDay").val("");
            $("#endTime").val("");
            
        }
    });

   
    
    $("#fname").focus();




});