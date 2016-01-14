var projects = [];

function Project(pjt) {
  this.title = pjt.title,
  this.publishedOn = pjt.publishedOn,
  this.link = pjt.link,
  this.description = pjt.description;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.find('.title').html(this.title);
  // Shows when the article was published
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);

  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  // Links to projects
  $newProject.find('.link').attr('href', this.link).html(this.link);

  $newProject.find('.description').html(this.description);

  $newProject.append('<hr />');

  $newProject.removeClass('template');

  return $newProject;
}

  $(document).ready(function() {
  portData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  portData.forEach(function(el) {
    projects.push(new Project(el));
  })

  projects.forEach(function(a) {
    $('#projects').append(a.toHtml())
  });
});
