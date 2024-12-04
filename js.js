var username = document.getElementById('name');
var pass = document.getElementById('pass');
var mail = document.getElementById('mail');
var sign = document.getElementById('btnup');
var btnLogin = document.getElementById('btnlogin');
var list2 = [];



btnLogin.onclick = function() {
  var email = mail.value;
  var password = pass.value;

  if (email && password) { 
    let found = false;

    for (var i = 0; i < list2.length; i++) {
      if (list2[i].email === email && list2[i].password === password) {
        found = true;
        break; 
      }
    }

    if (found) {
     
      window.location.href = "./third.html"; 
    } else {
      alert("Invalid email or password. Please try again.");
    }
  } else {
    
    var cartona = `<p class='text-center' id="para">All inputs is required</p>`;
    document.getElementById('loginn').innerHTML = cartona;
    para.style.cssText='color:red !important;'
  }
};