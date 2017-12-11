window.addEventListener('load', function(e){
  var menu = document.getElementById('menu-burger');
  menu.addEventListener('click',function(event){
      var nav = document.getElementById('nav-d');
      nav.classList.add('burger-menu-block');
  })
});