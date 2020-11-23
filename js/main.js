$(document).ready(function () {
 $('.header-burger').on('click', function(e) {
    e.preventDefault() 
  $('.header-burger,.header-menu').toggleClass('active');
 })
});