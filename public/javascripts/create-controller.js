$(document).ready(function()
{
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

    var uploadProgress = document.getElementById("uploadProgress");

    var unavail1 = document.getElementById("#unavail1");

    var img1 = document.getElementById("img1").src.split("/").pop();
    var img2 = document.getElementById("img2").src.split("/").pop();
    var img3 = document.getElementById("img3").src.split("/").pop();
    var img4 = document.getElementById("img4").src.split("/").pop();

    var img5 = document.getElementById("img5").src.split("/").pop();
    var img6 = document.getElementById("img6").src.split("/").pop();
    var img7 = document.getElementById("img7").src.split("/").pop();
    var img8 = document.getElementById("img8").src.split("/").pop();

    var file1;
    var file2;
    var file3;
    var file4;
    var file5;
    var file6;
    var file7;
    var file8;



    
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
                    console.log("Created");
                    uploadPics();
                    console.log("Uploading");
                }
                else
                {
                    alert('Claim number already exists. ');
                }
            });
        });
    });


    $("#file1").change(function(e)
    {
        readURL(this, "#img1");
        file1 = document.getElementById("file1").files[0];
        claimnumber = $("#claimnumber").val();
    });

    $("#file2").change(function(e)
    {
        readURL(this, "#img2");
        file2 = document.getElementById("file2").files[0];
        claimnumber = $("#claimnumber").val();
    });

    $("#file3").change(function(e)
    {
        readURL(this, "#img3");
        claimnumber = $("#claimnumber").val();
        file3 = document.getElementById("file3").files[0];
    });

    $("#file4").change(function(e)
    {
        readURL(this, "#img4");
        claimnumber = $("#claimnumber").val();
        file4 = document.getElementById("file4").files[0];
    });

    $("#file5").change(function(e)
    {
        readURL(this, "#img5");
        file5 = document.getElementById("file5").files[0];
        claimnumber = $("#claimnumber").val();
    });

    $("#file6").change(function(e)
    {
        readURL(this, "#img6");
        file6 = document.getElementById("file6").files[0];
        claimnumber = $("#claimnumber").val();
    });

    $("#file7").change(function(e)
    {
        readURL(this, "#img7");
        claimnumber = $("#claimnumber").val();
        file7 = document.getElementById("file7").files[0];
    });

    $("#file8").change(function(e)
    {
        readURL(this, "#img8");
        claimnumber = $("#claimnumber").val();
        file8 = document.getElementById("file8").files[0];
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
    callback();
}

function setData()
{
    var usersRef = firebase.database().ref("cases/").orderByKey();
    usersRef.once('value', function(snapshot) 
    {
        var claimnumber = $("#claimnumber").val();
        if(!snapshot.hasChild(claimnumber))
        {
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
function readURL(input, imgNum) 
{
    if (input.files && input.files[0]) 
    {
        var reader = new FileReader();
        
        reader.onload = function (e) 
        {
            $(imgNum).attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

function getImgURL()
{
    img1 = document.getElementById("img1").src.split("/").pop();
    img2 = document.getElementById("img2").src.split("/").pop();
    img3 = document.getElementById("img3").src.split("/").pop();
    img4 = document.getElementById("img4").src.split("/").pop();
    img5 = document.getElementById("img5").src.split("/").pop();
    img6 = document.getElementById("img6").src.split("/").pop();
    img7 = document.getElementById("img7").src.split("/").pop();
    img8 = document.getElementById("img8").src.split("/").pop();
}

function hideImg(unavailNum)
{
    //$(unavailNum).style.visibility = (visible ? 'visible' : 'hidden');
}

function savePicture()
{

}

function uploadPics()
{
    if (document.getElementById("file1").files[0] != null)
    {
        firebase.storage().ref(claimnumber + '/' + document.getElementById("file1").name).put(document.getElementById("file1").files[0]);
    }

    if (document.getElementById("file2").files[0] != null)
    {
        firebase.storage().ref(claimnumber + '/' + document.getElementById("file2").name).put(document.getElementById("file2").files[0]);
    }

    if (document.getElementById("file3").files[0] != null)
    {
        firebase.storage().ref(claimnumber + '/' + document.getElementById("file3").name).put(document.getElementById("file3").files[0]);
    }

    if (document.getElementById("file4").files[0] != null)
    {
        firebase.storage().ref(claimnumber + '/' + document.getElementById("file4").name).put(document.getElementById("file4").files[0]);
    }

    if (document.getElementById("file5").files[0] != null)
    {
        firebase.storage().ref(claimnumber + '/' + document.getElementById("file5").name).put(document.getElementById("file5").files[0]);
    }

    if (document.getElementById("file6").files[0] != null)
    {
        firebase.storage().ref(claimnumber + '/' + document.getElementById("file6").name).put(document.getElementById("file6").files[0]);
    }

    if (document.getElementById("file7").files[0] != null)
    {
        firebase.storage().ref(claimnumber + '/' + document.getElementById("file7").name).put(document.getElementById("file7").files[0]);
    }

    if (document.getElementById("file8").files[0] != null)
    {
        firebase.storage().ref(claimnumber + '/' + document.getElementById("file8").name).put(document.getElementById("file8").files[0]);
    }

}
