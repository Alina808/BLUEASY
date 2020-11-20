$(document).ready(function () {
 $('.header-burger').on('click', function(e) {
    e.preventDefault() // отменаят стандартное повередие элемента к примеру a,button
  $('.header-burger, .header-menu').toggleClass('active');
 })
});