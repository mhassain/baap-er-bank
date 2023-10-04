// click event handler
document.getElementById('btn-submit').addEventListener('click', function(){
    // get the email address
    const email = document.getElementById('user-email').value;
        //console.log(email);
    // get the password
    const password = document.getElementById('user-password').value;
        //console.log(password);
    // login validation
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = "bank.html";
    }
    else{
        alert("Invalid User");
    }
})