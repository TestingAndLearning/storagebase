$(document).ready(function()
{
    populateTable();
    var repopulate = false;

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

        /** Checks for duplicates for claimnumber. **/
        usersRef.once('value', function(snapshot) 
        {
            if(!snapshot.hasChild(claimnumber))
            {
                populated = true;
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
                repopulate = false;
                alert('Claim number already exists. ');
            }
        });

        /** Displayed in table if not already loaded. **/
        //TODO: Look into firebase.reload(); function. 
        if (repopulate)
        {
            repopulate = false;
            $("#claimsList tr").empty();
            setTimeout(populateTable, 1000);    //Sets delay to 1000 milliseconds, if too fast then sometimes firebase does not get it fast enough. 
            event.preventDefault(); //Prevents form from refreshing. 
        }
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
    query.once("value").then(function(snapshot) 
        {
            snapshot.forEach(function(childSnapshot) 
            {
                var key = childSnapshot.key;
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