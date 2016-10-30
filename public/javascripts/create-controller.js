$(document).ready(function()
{
    //TODO look for extension, check it. 
    //test123.innerText = claimnumber;
    var claimnumber = $("#claimnumber").val();
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var address = $("#address").val();
    var date = $("#date").val();
    var make = $("#make").val();
    var model = $("#model").val();
    var vin = $("#vin").val();
    var plate = $("#plate").val();

    var file1 = document.getElementById("#file1");
    var uploadProgress = document.getElementById("uploadProgress");

    
    //populateTable();

    /** Checks for duplicate claim number, then sets new data.   **/
    $("#submitBtn").click(function(e)
    {
        getFormData();
        var usersRef = firebase.database().ref("cases/").orderByKey();
        usersRef.once('value', function(snapshot) 
        {
            if(!snapshot.hasChild(claimnumber))
            {
                firebase.database().ref('cases/' + claimnumber).set(
                {
                    firstname: firstname,
                    lastname: lastname,
                    email : email,
                    phone : phone,
                    address: address,
                    date : date, 
                    make : make, 
                    model : model, 
                    vin : vin, 
                    plate: plate
                });
            }
            else
            {
                alert('Claim number already exists. ');
            }
        });
        e.preventDefault();
    });

/**
    //Max file size 10mb?
    browseBtn.addEventListener("change", function(e)
    {
        var file = e.target.files[0];
        var storageRef = firebase.storage().ref("car_pictures/" + file.name);

        //For progress bar
        var task = storageRef.put(file);
        task.on("state_changed", 
            function progress(snapshot)
            {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploadProgress.value = percentage;
            }, 
            function error(err)
            {

            }, 
            function complete()
            {

            }
        );
    });
**/

    $("#file1").change(function()
    {
        readURL(this);
    });
});

function getFormData()
{
    claimnumber = $("#claimnumber").val();
    //Add others later if not working. 
}

function readURL(input) 
{
    if (input.files && input.files[0]) 
    {
        var reader = new FileReader();
        
        reader.onload = function (e) 
        {
            $('#img1').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}



/**
function populateTable()
{
    appendTableHeaders();
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

function appendTableHeaders()
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
}
**/

        /**
        if (repopulate)
        {
            repopulate = false;
            $("#claimsList tr").empty();
            setTimeout(populateTable, 1000);    //Sets delay to 1000 milliseconds, if too fast then sometimes firebase does not get it fast enough. 
            event.preventDefault(); //Prevents form from refreshing. 
        }
        **/