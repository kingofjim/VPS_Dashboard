var API_URL = "http://localhost:5000"
var ttl = localStorage.getItem("openstack-token-ttl");
var token = localStorage.getItem("openstack-token");

if(!ttl || !token) {
    if(window.location.pathname.search("login.html") == -1) {
        backToLogin()
    }
}

if(Date.parse(ttl) < new Date()) {
    alert("Token Expired")
    backToLogin()
}

function backToLogin() {
    window.location.replace("./login.html");
}

function logout() {
    localStorage.removeItem("openstack-token-ttl")
    localStorage.removeItem("openstack-token")
    backToLogin()
}