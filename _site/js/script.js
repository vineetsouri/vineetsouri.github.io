function navLinker(){

  if ($(window).scrollTop() < $('#skills').offset().top) {
  $('.active').removeClass('active');
  $('nav a[href$="profile"]').parent().addClass('active');
  };

  if ($(window).scrollTop() > $('#skills').offset().top) {
  $('.active').removeClass('active');
  $('nav a[href$="skills"]').parent().addClass('active');
  };

  if ($(window).scrollTop() > $('#projects').offset().top) {
  $('.active').removeClass('active');
  $('nav a[href$="projects"]').parent().addClass('active');
  };

  if ($(document).height() - $(window).height() - $(window).scrollTop() < 250) {
  $('.active').removeClass('active');
  $('nav a[href$="contact"]').parent().addClass('active');
  };
}