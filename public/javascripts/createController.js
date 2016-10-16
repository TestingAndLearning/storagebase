$(document).ready(function()
{
    /**
    $('#test123').click(function () {
        $('#test123').css("color", "yellow");
    });
    **/
/*
    var claimnumber = document.getElementById("claimnumber");
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var date = document.getElementById("date");
    var submitBtn = document.getElementById("submitBtn");
    */

   // var dbRef = firebase.database().ref().child('text');    //1A. Need this to initialize.
        //var firebaseRef = firebase.database().ref().child('text');  //1A. Also need this. But can also just use other way with jquery functions.
        //firebaseRef.set("Some Values");   //These 2 lines wre at function below.




    //Stores form information into firebase. 
    $("#submitBtn").click(function(event){
        firebase.database.enableLogging(true);
        //test123.innerText = claimnumber;
        var claimnumber = $("#claimnumber").val();
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();
        var date = $("#date").val();

        firebase.database().ref('cases/' + claimnumber).set({
            firstname: firstname,
            lastname: lastname,
            email : email,
            date : date
        });

    //Retrieves information from firebase. 
    // Get a database reference to our posts
    var db = firebase.database();
    var ref = db.ref("cases/");
    // Attach an asynchronous callback to read the data at our posts reference
    ref.on("value", function(snapshot) {
      console.log(snapshot.val());
      test123.innerText = JSON.stringify(snapshot.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

        event.preventDefault();
    });

});



/**
var claimnumber = document.getElementById("claimnumber");
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("email");
var date = document.getElementById("date");
var submitBtn = document.getElementById("submitBtn");


test123.innerText = claimnumber;

function submitClick()
{
    var firebaseRef = firebase.database().ref().child('text');  //1A. Also need this.
    firebaseRef.set("Some Values");
    window.alert("Hello");
}

function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        claimnumber: name,
        email: email,
        profile_picture : imageUrl
    });
}

function createUser2(userId, firstname, email, date)
{
    firebase.database().ref('users/' + userId).set({
        claimnumber: firstname,
        email: email,
        profile_picture: date
    });

    var test123 = document.getElementById("test123");
    var claimnumber = document.getElementById("claimnumber");
    test123.innerText = claimnumber;

    event.preventDefault();
}



/
function submitClick1()
{
    var test123 = document.getElementById("test123");
    var dbRef = firebase.database().ref().child('text');
    dbRef.on('value', snap => test123.innerText = snap.val());
}
**/