



// merubah icon
var navbar = document.getElementById('navbar');
var menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', function() {
   navbar.classList.toggle('active');
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-xmark');
});

// dark mode
var dark = document.getElementById('icondark');
dark.addEventListener('click', function(){
  document.body.style='transition:1s;';
   document.body.classList.toggle('dark')
   dark.classList.toggle('fa-sun')
   dark.classList.toggle('fa-moon')
})

// ketika di klik dimanapun kembalikan slide-navbar
document.addEventListener('click', function(e){
  if(!menuIcon.contains(e.target)&&!navbar.contains(e.target)){
   navbar.classList.remove('active');
   menuIcon.classList.remove('fa-xmark');
   menuIcon.classList.add('fa-bars');

  }
})

   
  
