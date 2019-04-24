$( document ).ready(function() {
  $.getJSON('./data/page-1.json', function(data) {
    Object.keys(data).forEach(function(k){
      console.log(data[k]);
      $('#photo-template').append('<img src="' + data[k].image_url + '" />');
      $('img').addClass( 'landscape');
    });
  });
});
