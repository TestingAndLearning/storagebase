var logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', e =>
{
	firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => 
{
    if(firebaseUser)
    {
        //console.log(firebaseUser);
        console.log("Logged in. ");
    }
    else
    {
        console.log("Not logged in. ");
        window.location.replace("/login");
    }
});

//Move navbar-controller.js to bottom to avoid logOut btn is null on ejs file. 
//Move other script up to avoid css not loading before the page. 