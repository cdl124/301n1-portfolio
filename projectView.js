var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', ".tab", function(e) {
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show();
  });
};

projectView.setTeasers = function() {
$('article').each(function() {
  $('.description *:nth-of-type(n+1)').hide();
  })

  $('.more').on('click', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  })
}

$(document).ready(function() {
  projectView.handleMainNav();
  projectView.setTeasers();
})
