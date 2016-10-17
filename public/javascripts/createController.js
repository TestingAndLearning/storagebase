$(document).ready(function()
{
    populateTable();

    /** Saves new set of data.  **/
    $("#submitBtn").click(function(event)
    {
        //firebase.database.enableLogging(true);
        //test123.innerText = claimnumber;
        var claimnumber = $("#claimnumber").val();
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();
        var date = $("#date").val();
        var usersRef = firebase.database().ref("cases/").orderByKey();

        usersRef.once('value', function(snapshot) 
        {
          if (!snapshot.hasChild(claimnumber))
          {
                firebase.database().ref('cases/' + claimnumber).set(
                {
                    firstname: firstname,
                    lastname: lastname,
                    email : email,
                    date : date
                });
          }
          else
          {
            alert('exists');
          }
        });


        /** Retrieves information from firebase and displays in table. **/
        $("#claimsList tr").empty();    //clears all tr in #claimsList. 
        setTimeout(populateTable, 1000);    //Sets delay to 1000 milliseconds, if too fast then sometimes firebase does not get it fast enough. 

        //event.preventDefault(); //Prevents form from refreshing. 
    });

});

function populateTable ()
{
    $('#claimsList').append
    ('<table>'+
        '<thead>'+
        '<th>'+ 'Claim Number' +'</th>'+
        '<th>'+ 'First Name' +'</th>'+
        '<th>'+ 'Last Name' +'</th>'+
        '<th>'+ 'Email' + '</th>'+
        '<th>'+ 'Date' + '</th>'+
        '</thead>'+
    '</table>');

    // Loop through users in order with the forEach() method. The callback provided
    // to will be called synchronously with a DataSnapshot for each child:
    var query = firebase.database().ref("cases/").orderByKey();
    query.once("value")
      .then(function(snapshot) 
        {
            snapshot.forEach(function(childSnapshot) 
            {
              // key will be "ada" the first time and "alan" the second time
              var key = childSnapshot.key;
              // childData will be the actual contents of the child
              var childData = childSnapshot.val();

                    $('#claimsList tr:last').after
                    ('<tr>'+
                        '<td>'+ key +'</td>'+
                        '<td>'+ childData["firstname"] +'</td>'+
                        '<td>'+ childData["lastname"] +'</td>'+
                        '<td>'+ childData["email"] + '</td>'+
                        '<td>'+ childData["date"] +'</td>'+
                    '</tr>');
            });
        });
}


/**
        //Found under set data. 
        // Get a database reference to our posts. 
        var db = firebase.database();
        var ref = db.ref("cases/");

        // Attach an asynchronous callback to read the data at our posts reference
        ref.on("value", function(snapshot) 
        {
          console.log(snapshot.val());
          //test123.innerText = JSON.stringify(snapshot.val());
        }, 
        function (errorObject) 
        {
          console.log("The read failed: " + errorObject.code);
        });
**/

    /**
    document.getElementById('submitBtn2').addEventListener('click', function(event)
    {
    var claimnumber = $("#claimnumber").val();
    var usersRef = firebase.database().ref("cases/").orderByKey();
    usersRef.on('value', function(snapshot) 
        {
            if (!snapshot.hasChild(claimnumber)) 
            {
                alert("New")
            }
            else {
                alert("That user already exists");
            }
        });
    });
    **/