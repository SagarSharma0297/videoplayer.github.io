var loginForm = window.document.getElementById('login-form');
loginForm.onsubmit = function(e) {
    e.preventDefault();
    var data = {
        "username": this.username.value,
        "password":this.password.value
    }

    var xhttp = new XMLHttpRequest();
    xhttp.open('post','https://5d76bf96515d1a0014085cf9.mockapi.io/login',true);
    xhttp.send(JSON.stringify(data));
    xhttp.onreadystatechange = function() {
        if(this.readyState ===4){
            window.location.replace('./index.html');
            window.localStorage.setItem('login-status',true);
        }
    };
    
};