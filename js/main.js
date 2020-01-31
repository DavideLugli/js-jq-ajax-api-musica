$(document).ready(function() {

  $.ajax({
    'url': 'https://flynn.boolean.careers/exercises/api/array/music',
    'method': 'GET',
    'success': function(data) {
      printAlbum(data.response);


    },
    'error': function(request, state, errors) {
      alert('Errore ' + errors);
    }
  });



function printAlbum(album) {
for (var i = 0; i<album.length; i++) {
var cd = album[i];
console.log(cd);
  // script x handlebars
var source = $("#entry-template").html();
var template = Handlebars.compile(source);

var html = template(cd);
$('.cds-container').append(html);
}
}
});
