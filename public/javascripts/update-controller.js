$(document).ready(function()
{
	var queriedclaim;
	var searchVal = $("#searchBar").val();
	console.log(searchVal);


	$("#searchBtn").click(function() 
	{
		getClaim(function()
		{
			searchClaim(function()
			{
				getHash();
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

});

function getClaim(callback)
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

function getHash()
{
	queriedclaim = window.location.href.toString().split("#").pop();
	console.log(queriedclaim);
}