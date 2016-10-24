$(document).ready(function()
{
	var company = $("#company").val();
    var username = $("#inputUser").val();
    var password = $("#inputPassword").val();
    var confirmPassword = $("#confirmPassword").val();

    /** Checks for duplicate claim number, then sets new data.   **/
    $("#registerBtn").click(function(event)
    {
        getFormData();
        var usersRef = firebase.database().ref("users/").orderByKey();
        console.log("clicked reg");


        usersRef.once('value', function(snapshot) 
        {
            if(!snapshot.hasChild(username))
            {
				firebase.auth().createUserWithEmailAndPassword(username, password).catch(function(error) 
				{
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  // ...
				  console.log("auth");
				});
            }
            else
            {
                alert('Username already exists! ');
            }
        });
        console.log("registered");

        event.preventDefault();
    });
});

function getFormData()
{
	company = $("#company").val();
	username = $("#inputUser").val();
	password = $("#inputPassword").val();
	confirmPassword = $("#confirmPassword").val();
}