
//var requestURL = 'http://172.19.88.251:8774/v2.1/os-quota-sets/8dff33059948438b98977b0d36274027/detail';

var myHeading = document.getElementById('logo');
var loginuser = localStorage.getItem("username");

myHeading.textContent = 'Hello world!';
document.getElementById("loginuser").innerHTML = loginuser;
