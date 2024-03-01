const Users = ["JUANYNELSON", "LUCASTRESER", "MAXIGAU", "CRISTINA", "SANTIAGO"];
const Pass = "ISFT213";

document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();
    log();
});

function log() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    user = user.toUpperCase();
    pass = pass.toUpperCase();

    localStorage.setItem("DomoUser", user);
    localStorage.setItem("DomoPass", pass);

    if (user == Users[0] && pass == Pass) {window.location.href = "/Usuarios/1.html";}
    else if (user == Users[1] && pass == Pass) {window.location.href = "/Usuarios/2.html";}
    else if (user == Users[2] && pass == Pass) {window.location.href = "/Usuarios/3.html";}
    else if (user == Users[3] && pass == Pass) {window.location.href = "/Usuarios/4.html";}
    else if (user == Users[4] && pass == Pass) {window.location.href = "/Usuarios/5.html";}
}
