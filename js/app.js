let introHeight = $('.section--intro').height() + (0.4 * $(window).height())
let scrollLink = $('.scroll');

// Smooth scrolling
scrollLink.click(function (e) {
  e.preventDefault();
  $('body,html').animate({
    scrollTop: $(this.hash).offset().top
  }, 1000);
});



$(window).scroll(function () {
  let wScroll = $(window).scrollTop()

  if (wScroll > introHeight) {
    $('nav').addClass('alone')
  }
  if (wScroll < introHeight) {
    $('nav').removeClass('alone')
  }



  // INTRO
  if (wScroll < introHeight) {
    $('.section--intro .logo').css({
      'transform': 'translate(0px, -' + wScroll / 4 + 'px)'
    });
    $('.intro__text').css({
      'transform': 'translate(0px, -' + wScroll / 6 + 'px)'
    });
  }

  // FLOATING CARDS
  if (wScroll > $('.section--mission').offset().top - $(window).height()) {
    var offset = (Math.min(0, wScroll - $('.section--mission').offset().top + $(window).height() - 350)).toFixed();

    $('.section--mission .card').css({ 'transform': 'translate(' + offset + 'px,0)' });
    $('.section--mission .card--img').css({ 'transform': 'translate(' + Math.abs(offset) + 'px,0)' });
  }

  if (wScroll > $('.section--taproom').offset().top - $(window).height()) {
    var offset = (Math.min(0, wScroll - $('.section--taproom').offset().top + $(window).height() - 350)).toFixed();

    $('.section--taproom .card').css({ 'transform': 'translate(' + offset + 'px,0)' });
    $('.section--taproom .card--img').css({ 'transform': 'translate(' + Math.abs(offset) + 'px,0)' });
  }

  // LANDING ELEMENTS
  if (wScroll > $('#brewery').offset().top - ($(window).height() / 1.2)) {
      $('#brewery .section__image').addClass('is-showing');
  }
  if (wScroll > $('footer').offset().top - ($(window).height() / 1.2)) {
    $('footer .logo').addClass('is-showing');
  }

})