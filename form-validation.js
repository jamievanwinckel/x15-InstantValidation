function validate(){
  var numA = 10;
  var numB = 2;
  var numC;
  console.log("test 2");
  numA + numB;
  numC = numA;
  console.log(numC);
  console.log("test");
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if ( userEntered.length >= 6 )
  {
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  else
  {
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  if ( userEntered.search (" ") == -1 )
  {
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  else
  {
    document.getElementById("usernameError").innerHTML="Username cannot have any spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }

  if ( passEntered.toLowerCase(passEntered) != "password" )
  {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  else
  {
    document.getElementById("passwordError").innerHTML="Password cannot be password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  if ( passEntered != userEntered )
  {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  else
  {
    document.getElementById("passwordError").innerHTML="Password cannot be the same as username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  if ( passEntered.length >= 6 || passEntered <= 20 )
  {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  else
  {
    document.getElementById("passwordError").innerHTML="Password cannot be less than 6 nor greater than 20.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
}
