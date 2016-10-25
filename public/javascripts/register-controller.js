var txtEmail = document.getElementById('inputEmail');
var txtPassword = document.getElementById('inputPassword');
var registerBtn = document.getElementById('registerBtn');

//Register event
registerBtn.addEventListener('click', e =>
{
    var email = txtEmail.value;
    var password = txtPassword.value;
    var auth = firebase.auth();

    var promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
});

//Add realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => 
{
    if(firebaseUser)
    {
        console.log(firebaseUser);
    }
    else
    {
        console.log('not logged in');
    }
});