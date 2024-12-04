var username = document.getElementById('name');
var pass = document.getElementById('pass');
var mail = document.getElementById('mail');
var sign = document.getElementById('btnup');
var btnLogin = document.getElementById('btnlogin');
var list2 = [];

var sign = document.getElementById('btnup');

if (sign) { // Check if the element exists
  sign.onclick = function() {
    var info = {
      name: username.value,
      email: mail.value,
      password: pass.value
    };
  
    if (username.value && mail.value && pass.value) {
      let emailExists = false;
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].email === mail.value) {
          emailExists = true;
          break;
        }
      }
  
      if (emailExists) {
        var cartona = `<p class='text-center' id="para">Email already exists</p>`;
        document.getElementById('signup').innerHTML = cartona;
        para.style.cssText='color:red !important;'
      } else {
        
        var cartona = `<p class='text-center' id="para">Success</p>`;
        document.getElementById('signup').innerHTML = cartona;
        para.style.cssText='color:#27A745 !important;'
        list2.push(info);
        localStorage.setItem('sign', JSON.stringify(list2));
      }
    } else {
      
      var cartona = `<p class='text-center' id="para">All inputs is required</p>`;
      
      document.getElementById('signup').innerHTML = cartona;
      para.style.cssText='color:red !important;'
    }
  
    
  };
} else {
  console.error("Element with ID 'btnup' not found.");
}


