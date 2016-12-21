$(document).ready(function()
{
	var queriedclaim;
	var searchVal = $("#searchBar").val();

	var firstname;
	var lastname;
	var email;
	var phone;
	var date;
	var make;
	var model;
	var plate;
	var progress;


	$("#searchBtn").click(function() 
	{
		getInput(function()
		{
			searchClaim(function()
			{
				getHash(function()
				{
					getClaim(function()
					{
						displayClaim(function()
						{
							stopLoad();
						});
					});
				});
			});
		});
	});

 	$('[data-toggle="tooltip"]').tooltip(); 

/**
    var query = firebase.database().ref("cases/").orderByKey();
    query.once("value").then(function(snapshot) 
    {
        snapshot.forEach(function(childSnapshot) 
        {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();


 			childData["firstname"];
        });
    });
**/

	$("#updateBtn").click(function() 
    {
    	console.log("Clicked");
        var usersRef = firebase.database().ref("cases/").orderByKey();
        usersRef.once('value', function(snapshot) 
        {
            var claimnumber = $("#claimnumber").val();
            var progressindex = document.getElementById("progress");
			var selectedindex = progressindex.options[progressindex.selectedIndex].value;

            firebase.database().ref('cases/' + claimnumber).update(
            {
                progress: selectedindex                        
            });
            console.log("set");
        });

    });

});

function getInput(callback)
{
	console.log("1");
	searchVal = $("#searchBar").val();
	callback();
}


function searchClaim(callback)
{
	console.log("2");
	window.location = "#" + searchVal;
	callback();
}

function getHash(callback)
{
	queriedclaim = window.location.href.toString().split("#").pop();
	console.log(queriedclaim);
	callback();
}

function getClaim(callback)
{
		var query = firebase.database().ref("cases/" + searchVal).orderByKey();

		query.once("value").then(function(snapshot) 
		{
			if(snapshot.exists())
			{
				firstname = snapshot.child("firstname").val();
				lastname = snapshot.child("lastname").val();
				email = snapshot.child("email").val();
				phone = snapshot.child("phone").val();

				date = snapshot.child("date").val();
				make = snapshot.child("make").val();
				model = snapshot.child("model").val();
				plate = snapshot.child("plate").val();
				progress = snapshot.child("progress").val();

				switch (progress)
				{
					case "20":
						p20();
						break;
					case "40":
						p40();
						break;
					case "60":
						p60();
						break;
					case "80":
						p80();
						break;
					case "100":
						p100();
						break;
				}

				callback();
			}
			else
			{
				alert("Claim number not found. ");
			}

		});

}

function displayClaim(callback)
{
	$('input[name="claimnumber"]').val(searchVal);
	$('input[name="firstname"]').val(firstname + " " + lastname);
	$('input[name="email"]').val(email + " " + phone);
	$('input[name="date"]').val(date);
	$('input[name="make"]').val(make + " / " + model + " / " + plate);
	document.getElementById('progress').value = progress;
	callback();
}

function stopLoad()
{
	searchVal = null;
	console.log("stopping loading");
}

function p20()
{
	document.getElementById("p20").style.visibility = 'visible';
	document.getElementById("p40").style.visibility = 'hidden';
	document.getElementById("p60").style.visibility = 'hidden';
	document.getElementById("p80").style.visibility = 'hidden';
	document.getElementById("p100").style.visibility = 'hidden';
}

function p40()
{
	document.getElementById("p20").style.visibility = 'visible';
	document.getElementById("p40").style.visibility = 'visible';
	document.getElementById("p60").style.visibility = 'hidden';
	document.getElementById("p80").style.visibility = 'hidden';
	document.getElementById("p100").style.visibility = 'hidden';
}

function p60()
{
	document.getElementById("p20").style.visibility = 'visible';
	document.getElementById("p40").style.visibility = 'visible';
	document.getElementById("p60").style.visibility = 'visible';
	document.getElementById("p80").style.visibility = 'hidden';
	document.getElementById("p100").style.visibility = 'hidden';
}

function p80()
{
	document.getElementById("p20").style.visibility = 'visible';
	document.getElementById("p40").style.visibility = 'visible';
	document.getElementById("p60").style.visibility = 'visible';
	document.getElementById("p80").style.visibility = 'visible';
	document.getElementById("p100").style.visibility = 'hidden';
}

function p100()
{
	document.getElementById("p20").style.visibility = 'visible';
	document.getElementById("p40").style.visibility = 'visible';
	document.getElementById("p60").style.visibility = 'visible';
	document.getElementById("p80").style.visibility = 'visible';
	document.getElementById("p100").style.visibility = 'visible';
}