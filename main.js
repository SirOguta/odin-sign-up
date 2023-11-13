document.addEventListener("DOMContentLoaded" ,function() {
    let password_ =document.querySelector("#password_").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;

    let error = document.querySelector("#error");
    if( password_ =="" && confirmPassword ==""){
        error.innerHTML ="*Passwords do not match";
    }
    else if( password_ === confirmPassword ){
        error.innerHTML ="";
    }
console.log("hi")
})