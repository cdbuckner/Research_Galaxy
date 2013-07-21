document.addEventListener('scroll', onScroll); 

var 
  navbar = document.querySelector('.navbar'),
  header = document.querySelector('.header'),
  navOrigOffsetY = navbar.offsetTop,
  headerHeight = header.offsetHeight;

function onScroll(e) {
    if(window.scrollY >= navOrigOffsetY) { navbar.classList.add('navbar-fixed-top') }
    else { navbar.classList.remove('navbar-fixed-top'); }

    /*if(window.scrollY >= headerHeight) { header.style.top = "0px"; }
    else { header.style.top = (scrollY * .05) + "px" }*/
};

$('.open_card_button').on("click", openCard);

function openCard()
{
  var 
    me = $(this),
    myLeftSide = me.parent(),
    myRightSide = myLeftSide.next(),
    myIcon = myLeftSide.children('.open_card_button').children('i'),
    toggleWidth = myRightSide.width() > 0 ? "0px" : myLeftSide.width();

  myRightSide.animate({width:toggleWidth}).toggleClass("closed");
  myIcon.toggleClass("icon-forward").toggleClass("icon-backward");
}