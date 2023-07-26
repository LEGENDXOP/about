$(document).ready(function() {
  $(".content-section").each(function(i) {
    $(this).delay(500 * i).animate({opacity: '1', 'padding-top': '0'}, 500);
  });
});
