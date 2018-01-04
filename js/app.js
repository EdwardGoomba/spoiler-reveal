$(document).ready( function() {

  // Create reveal spoiler button
  const $button = $('<button>Reveal Spoiler</button>');

  // Show spoiler text
  $('.spoiler').on('click', 'button', function() {
    $('.spoiler span').show();
    $('.spoiler button').hide();
  });

  // Append to page
  $('.spoiler').append($button);

  // Hide spoiler on page load
  $('.spoiler span').hide();



});
