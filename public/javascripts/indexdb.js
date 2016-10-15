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


    var dbRef = firebase.database().ref().child('text');    //1A. Need this to initialize.

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


/**
function submitClick1()
{
    var test123 = document.getElementById("test123");
    var dbRef = firebase.database().ref().child('text');
    dbRef.on('value', snap => test123.innerText = snap.val());
}
**/