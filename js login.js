var username = document.getElementById('name');
var pass = document.getElementById('pass');
var mail = document.getElementById('mail');
var sign = document.getElementById('btnup');
var btnLogin = document.getElementById('btnlogin');
var list=localStorage.getItem('sign')
var list1=JSON.parse(list);


btnLogin.onclick = function() {
  var email = mail.value;
  var password = pass.value;

  if (email && password) { 
    let found = false;

    for (var i = 0; i < list1.length; i++) {
      if (list1[i].email === email && list1[i].password === password) {
        found = true;
       localStorage.setItem('name',list1[i].name)
        break; 
      }
    }

    if (found) {
     
      window.location.href = "./third.html"; 
    } else {
      
    var cartona = `<p class='text-center' id="para">incorrect email or password</p>`;
    document.getElementById('loginn').innerHTML = cartona;
    para.style.cssText='color:red !important;'
    }
  } else {
    
    var cartona = `<p class='text-center' id="para">All inputs is required</p>`;
    document.getElementById('loginn').innerHTML = cartona;
    para.style.cssText='color:red !important;'
  }
};