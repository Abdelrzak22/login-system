var username = document.getElementById('name');
var pass = document.getElementById('pass');
var mail = document.getElementById('mail');
var sign = document.getElementById('btnup');
var list=localStorage.getItem('sign')
var logout=document.getElementById('logout')

var output=JSON.parse(list);
var username=localStorage.getItem('name');
    var cartona='';
    cartona=`<h1>welcome ${username}</h1>`
    document.getElementById('show').innerHTML=cartona;

logout.addEventListener('click',function(){
  location.href='./index.html';
})