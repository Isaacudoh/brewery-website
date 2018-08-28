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

  // INTRO
  $('.section--intro .logo').css({
    'transform': 'translate(0px, ' + wScroll / 4 + 'px)'
  });
  $('.intro__text').css({
    'transform': 'translate(0px, ' + wScroll / 6 + 'px)'
  });
  $('.wine').css({
    'transform': 'translate(0px, ' + wScroll / 3 + 'px)'
  });

  $('.hero').css({
    'transform': 'translate(0px, -' + wScroll / 100 + '%)'
  });

  // FLOATING CARDS
  if (wScroll > $('.section--mission').offset().top - $(window).height()) {

    var offset = (Math.min(0, wScroll - $('.section--mission').offset().top + $(window).height() - 350)).toFixed();

    $('.section--mission .card').css({ 'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)' });
    $('.section--mission .card--img').css({ 'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)' });

  }

  if (wScroll > $('.section--taproom').offset().top - $(window).height()) {

    var offset = (Math.min(0, wScroll - $('.section--taproom').offset().top + $(window).height() - 350)).toFixed();

    $('.section--taproom .card').css({ 'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)' });
    $('.section--taproom .card--img').css({ 'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)' });
  }

  // LANDING ELEMENTS
  if (wScroll > $('#brewery').offset().top - ($(window).height() / 1.2)) {

    $('#brewery').each(function (i) {

      // setTimeout(function () {
        $('#brewery .section__image').addClass('is-showing');
      // }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }

})