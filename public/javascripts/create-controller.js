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
    var progress = $("#progress").val();

    var file1 = document.getElementById("#file1");
    var file2 = document.getElementById("#file2");
    var file3 = document.getElementById("#file3");
    var file4 = document.getElementById("#file4");
    var uploadProgress = document.getElementById("uploadProgress");

    var unavail1 = document.getElementById("#unavail1");

    var img1 = document.getElementById("img1").src.split("/").pop();
    var img2 = document.getElementById("img2").src.split("/").pop();
    var img3 = document.getElementById("img3").src.split("/").pop();
    var img4 = document.getElementById("img4").src.split("/").pop();

    var file1;
    var file2;



    //console.log(img1);

    
    $("#submitBtn").click(function() 
    {
        getFormData(function() 
        {
            var usersRef = firebase.database().ref("cases/").orderByKey();
            usersRef.once('value', function(snapshot) 
            {
                var claimnumber = $("#claimnumber").val();
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
                var progress = $("#progress").val();

                if(!snapshot.child(claimnumber).exists())
                {
                    //var storageRef = firebase.storage().ref("car_pictures/" + file1.name);
                    //var task = storageRef.put(file1);
                    console.log(claimnumber);
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
                        plate: plate, 
                        progress: progress                        
                    });
                    console.log("set");
                    console.log(progress);
                }
                else
                {
                    alert('Claim number already exists. ');
                }
            });
        });
    });


    //populateTable();

    /** Checks for duplicate claim number, then sets new data.   **/
    /**
    $("#submitBtn").click(function(e)
    {
        getFormData();
        //setData();
        var usersRef = firebase.database().ref("cases/").orderByKey();
        usersRef.once('value', function(snapshot) 
        {
            var claimnumber = $("#claimnumber").val();
            if(!snapshot.hasChild(claimnumber))
            {
                //var storageRef = firebase.storage().ref("car_pictures/" + file1.name);
                //var task = storageRef.put(file1);
                console.log(claimnumber);
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
                console.log("set");
            }
            else
            {
                alert('Claim number already exists. ');
            }
        });
        //e.preventDefault();
    });
    **/

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

    $("#file1").change(function(e)
    {
        readURL(this, "#img1", "#unavail1");
        file1 = e.target.files[0];
    });

    $("#file2").change(function(e)
    {
        readURL(this, "#img2");
        file2 = e.target.files[0];
    });

    $("#file3").change(function()
    {
        readURL(this, "#img3");
    });

    $("#file4").change(function()
    {
        readURL(this, "#img4");
    });
});

function test1(value, callback)
{
    console.log(value);
    callback();
}

function getFormData(callback)
{
    claimnumber = $("#claimnumber").val();
    firstname = $("#firstname").val();
    lastname = $("#lastname").val();
    email = $("#email").val();
    phone = $("#phone").val();
    address = $("#address").val();
    date = $("#date").val();
    make = $("#make").val();
    model = $("#model").val();
    vin = $("#vin").val();
    plate = $("#plate").val();
    //progress = $("#progress").val();
    callback();
    //console.log(claimnumber);
    //Add others later if not working. 
}

function setData()
{
    var usersRef = firebase.database().ref("cases/").orderByKey();
    usersRef.once('value', function(snapshot) 
    {
        var claimnumber = $("#claimnumber").val();
        if(!snapshot.hasChild(claimnumber))
        {
            //var storageRef = firebase.storage().ref("car_pictures/" + file1.name);
            //var task = storageRef.put(file1);
            console.log(claimnumber);
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
                plate: plate, 
                progress: progress
            });
            console.log("set");
        }
        else
        {
            alert('Claim number already exists. ');
        }
    });
}

//Changes the picture to preview uploaded picture. 
function readURL(input, imgNum, unavailNum) 
{
    if (input.files && input.files[0]) 
    {
        var reader = new FileReader();
        
        reader.onload = function (e) 
        {
            $(imgNum).attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
        hideImg(unavailNum);
    }
}

function getImgURL()
{
    img1 = document.getElementById("img1").src.split("/").pop();
    img2 = document.getElementById("img2").src.split("/").pop();
    img3 = document.getElementById("img3").src.split("/").pop();
    img4 = document.getElementById("img4").src.split("/").pop();
}

function hideImg(unavailNum)
{
    //$(unavailNum).style.visibility = (visible ? 'visible' : 'hidden');
}

function savePicture()
{

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



