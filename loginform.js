
function checkAccessibility(){
var username = document.getElementById('user').value;
var password = document.getElementById('password').value;


if (username == 'Stargazer' && password == 'tranquility') {
      location.href='https://codepen.io/AMill';
 }
 
  else{
    alert('Invalid username or password.')
    
    
    
  }
}
