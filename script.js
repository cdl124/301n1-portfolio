var projects = [];

function Project(pjt) {
  this.title = pjt.title,
  this.publishedOn = pjt.publishedOn,
  this.link = pjt.link,
  this.description = pjt.description;
}

Project.prototype.toHtml = function() {
  var projectTemplate = $('#project-template').html();
  var compileProject = Handlebars.compile(projectTemplate);
  var html = compileProject(this);

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'Published ' + this.daysAgo + ' days ago' : '(draft)';

  return html;
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
