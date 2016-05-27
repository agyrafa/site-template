$(window).resize(function(){
  $('div').css('transition', 'all .4s');
  if($(window).width() > 992){
    $('#header .menu').css('display', 'block');
  } else {
    $('#header .menu').css('display', 'none');
  }
});

$(document).ready(function(){
  window.sr = ScrollReveal();
  sr.reveal('.leftReveal', {
    origin : 'left',
    duration : 800
  });
  sr.reveal('.rightReveal', {
    origin : 'right',
    duration : 800
  });
  sr.reveal('.topReveal', {
    origin : 'top',
    duration : 800
  });
  sr.reveal('.bottomReveal', {
    origin : 'bottom',
    duration : 800
  });

  $(window).scroll(function(){
    headerSticky();
  });
  
});

function headerSticky(callback){
  var wTop = $(window).scrollTop(),
      menuTop = $('#header, #fake-header'),
      headerHeight = $("#header").height() / 2;

  if ( $(window).width() > 992 && wTop > headerHeight) {
    menuTop.addClass('sticky');
  } else {
    menuTop.removeClass('sticky');
  }

  if ( typeof(callback) === "function" ){
    return(callback());
  }
}
