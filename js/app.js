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

  // NAVIGATION
  if (wScroll > introHeight) { $('nav').addClass('alone') }
  if (wScroll < introHeight) { $('nav').removeClass('alone') }

  // FLOATING CARDS
  if (wScroll > $('.section--mission').offset().top - $(window).height()) {
    var offset = (Math.min(0, wScroll - $('.section--mission').offset().top + $(window).height() - 350)).toFixed();
    $('.section--mission .card').css({ 'transform': 'translate(' + offset + 'px,0)' });
  }

  if (wScroll > $('.section--taproom').offset().top - $(window).height()) {
    var offset = (Math.min(0, wScroll - $('.section--taproom').offset().top + $(window).height() - 350)).toFixed();
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

const left = document.getElementById('js-left')
const right = document.getElementById('js-right')
const list = $('.carousel__item')

let translate;
let currentItem = 2
let item = list[currentItem];
let caption = item.querySelector('figcaption');
$(caption).show()

const clickStuff = hand => {
  $(caption).hide()

  if (hand === 'left') {
    currentItem = (currentItem == 0) ? 4 : (currentItem - 1);
  } else {
    currentItem = (currentItem == 4) ? 0 : (currentItem + 1);
  }

  item = list[currentItem]
  caption = item.querySelector('figcaption')
  $(caption).show()

  translate = (2-currentItem)*100
  Object.keys(list).forEach(function(key) {
    $(list[key]).css('transform', 'translateX(' +translate+'%)')
  })
}

$(left).click(_ => {clickStuff('left')})
$(right).click(_ => {clickStuff('right')})