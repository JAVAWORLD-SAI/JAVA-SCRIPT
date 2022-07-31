function myPrompt(){
    var x= prompt("Enter the User Name");
   // confirm("USer Enter the Number is "+ x);
   console.log("prompt console "+ x );
    document.write("User name is  " + x);
}

function myAlert() {
    alert("Enter the details")
    console.log("ALert console");
}

function myConfirm(){
    var z= confirm("click ok or cancel")
    alert("User option is " +z);
    console.log("confirm console "+z);
}
