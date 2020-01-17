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
  var imgActive = $('img.active');
  var imgNext = imgActive.next();
  imgActive.removeClass('active');
  imgNext.addClass('active');

}

function prevImg()  {

}
