var txtEmail = document.getElementById('inputEmail');
var txtPassword = document.getElementById('inputPassword');
var signinBtn = document.getElementById('signinBtn');

signinBtn.addEventListener('click', e =>
{
	var email = txtEmail.value;
	var password = txtPassword.value;
	var auth = firebase.auth();

	var promise = auth.signInWithEmailAndPassword(email, password);

	promise.catch(e => console.log(e.message));
	e.preventDefault();

});

//Add realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => 
{
    if(firebaseUser)
    {
        console.log(firebaseUser);
        window.location.replace("/");
    }
    else
    {
        console.log('not logged in');
    }
});