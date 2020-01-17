// le immagini scorrono verso dx
$(document).ready(function () {

    $('.next').click(
      function () {
        nextImg();
      }
    );

    $('.prev').click(
      function () {
        prevImg();
      }
    );
  }
);

// funzioni
function nextImg() {
  var iconActive = $('i.active');
  var iconNext = iconActive.next();
  var imageActive = $('img.active');
  var imageNext = imageActive.next();
  if (imageActive.hasClass('last')) {
    imageNext = $('img.first');
    iconNext = $('i.first');
  }
  iconActive.removeClass('active');
  iconNext.addClass('active');
  imageActive.removeClass('active');
  imageNext.addClass('active');
}

function prevImg()  {
  var iconActive = $('i.active');
  var iconNext = iconActive.prev();
  var imageActive = $('img.active');
  var imagePrev = imageActive.prev();
  if (imageActive.hasClass('first')) {
    imagePrev = $('img.last');
    iconNext = $('i.last');
  }
  imageActive.removeClass('active');
  imagePrev.addClass('active');
  iconActive.removeClass('active');
  iconNext.addClass('active');

}
