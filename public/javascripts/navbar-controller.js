var logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', e =>
{
	firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => 
{
    if(firebaseUser)
    {
        console.log(firebaseUser);
    }
    else
    {
        console.log('not logged in');
        window.location.replace("/");
    }
});

