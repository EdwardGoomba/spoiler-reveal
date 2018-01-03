$(document).ready( function() {
  // Hide spoiler on page load
  $('.spoiler span').hide();

  // Show spoiler text
  $('.spoiler button').click(function() {
    $('.spoiler span').show();
    $('.spoiler button').hide();
  });

});
