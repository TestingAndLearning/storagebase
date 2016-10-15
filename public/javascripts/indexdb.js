$(document).ready(function()
{
    /**
    $('#test123').click(function () {
        $('#test123').css("color", "yellow");
    });
    **/

    var username = document.getElementById("username");
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var joined = document.getElementById("joined");
    var submitBtn = document.getElementById("submitBtn");
    var test123 = document.getElementById("test123");

   // var dbRef = firebase.database().ref().child('text');    //1A. Need this to initialize.
        //var firebaseRef = firebase.database().ref().child('text');  //1A. Also need this. But can also just use other way with jquery functions.
        //firebaseRef.set("Some Values");   //These 2 lines wre at function below.

    $("#submitBtn").click(function(event){

        var username = document.getElementById("username");
        var test321 = $("#username").val();
        test123.innerText = test321;

        firebase.database().ref('users/' + test321).set({
            username: test321,
            email: test321,
            profile_picture : test321
        });


        event.preventDefault();
    });

});

/**
var username = document.getElementById("username");
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("email");
var joined = document.getElementById("joined");
var submitBtn = document.getElementById("submitBtn");
**/


function submitClick()
{
    var firebaseRef = firebase.database().ref().child('text');  //1A. Also need this.
    firebaseRef.set("Some Values");
    window.alert("Hello");
}

function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
    });
}

function createUser2(userId, firstname, email, joined)
{
    firebase.database().ref('users/' + userId).set({
        username: firstname,
        email: email,
        profile_picture: joined
    });

    var test123 = document.getElementById("test123");
    var username = document.getElementById("username");
    test123.innerText = username;

    event.preventDefault();
}



/**
function submitClick1()
{
    var test123 = document.getElementById("test123");
    var dbRef = firebase.database().ref().child('text');
    dbRef.on('value', snap => test123.innerText = snap.val());
}
**/