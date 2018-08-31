let introHeight = $('.section--intro').height() + (0.4 * $(window).height())
let scrollLink = $('.scroll');

// SMOOTH SCROLLING
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

// THE DOM STUFF
const left = document.getElementById('js-left')
const right = document.getElementById('js-right')
let list = Object.values(document.querySelectorAll('.carousel__item'))
// VARIABLES
let translate;
let length = list.length
let middleTerm = Math.ceil((length-1) / 2)
let spotlightIndex = middleTerm
let spotlight = list[spotlightIndex];
let caption = spotlight.querySelector('figcaption');
caption.style.display = 'block'
// ONCLICK FUNCTION
const clickStuff = hand => {
  caption.style.display = 'none' // REMOVE ALL CAPTIONS
  // CHENGE SPOTLIGHT INDEX WITH RESPECT TO WHERE YOU WANT TO GO
  if (hand === 'left') {
    spotlightIndex = (spotlightIndex == 0) ? (list.length - 1) : (spotlightIndex - 1);
  } else {
    spotlightIndex = (spotlightIndex == (list.length - 1)) ? 0 : (spotlightIndex + 1);
  }
  // VARAIABLE RELOADED
  spotlight = list[spotlightIndex]
  caption = spotlight.querySelector('figcaption')
  caption.style.display = 'block'
  // ANIMATION
  translate = (middleTerm-spotlightIndex)*100;
  Object.keys(list).forEach(function(key) {
    list[key].style.transform = 'translateX(' + translate + '%)';
  })
}
// EVENT LISTENERS
left.addEventListener('click', _ => clickStuff('left'))
right.addEventListener('click',  _ => clickStuff('right'))