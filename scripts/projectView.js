(function(module) {

var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', ".tab", function(e) {
    $('.tab-content').fadeOut(300);
    $('#' + $(this).attr('data-content')).fadeIn(300);
  });
};

// For the "More..." links
projectView.setTeasers = function() {
$('article').each(function() {
  $('.description *:nth-of-type(n+2)').hide();
  })

  $('.more').on('click', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn(300);
    $(this).hide();
  })
}

projectView.initIndexPage = function() {
  Project.all.forEach(function(a) {
    $('#projects').append(a.toHtml())
  });
}

projectView.postInstances = function() {
  $('.catInstances').append('Fun fact: The letter "g" appears ' + Project.numInstances() + ' times in my portfolio!');
}

$(document).ready(function() {
  projectView.handleMainNav();
  projectView.setTeasers();
  projectView.postInstances();
})


module.projectView = projectView;
})(window);
