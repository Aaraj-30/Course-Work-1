//JS stands for Javascript  -This is a single line comment


/*  
This
   is a 
     multi
       line comment.

       This is the external Js file.
*/
function validateForm() {
    var fName = document.forms["validation"] ["fName"].value;
    var lName = document.forms["validation"] ["lName"].value;
    var email = document.forms["validation"] ["email"].value;

    if(fName == "" ||  lName == "" || email == ""){
    alert("field cannot be empty.  Please fill in the details.");
    }
    else{
    alert("Thank you for subscribing!");
    }
}
/*             This is the Javascript for form validation   */
//                                                      This is the end of JS                                                          \\