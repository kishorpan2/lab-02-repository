const animalIMG = [];
const animalName = [];

$( document ).ready(function() {
  $.getJSON("./data/page-1.json", function(data) { 
    Object.keys(data).forEach(function(i){ 
      let tempURL = {};
      let tempName = {}; 
      $("#photo-template").append('<h2>' + data[i].title + '</h2>');
      $("#photo-template").append('<li><img src="' + data[i].image_url + '" /></li>');
      $("img").addClass("landscape");
      $("select").append($('<option>', {value:data[i].image_url, text:data[i].keyword}));
      tempURL.imgUrl = data[i].image_url;
      tempName.names = data[i].keyword;
      animalIMG.push(tempURL);
      animalName.push(tempName);
    });
  });
});

$("select").change(function(){
  newImg = $(this).val();
  console.log('Selected value: ' + $(this).val());
  var newpic = document.getElementById("photo-template");
  while (newpic.firstChild) {
    newpic.removeChild(newpic.firstChild);
  }
  $("#photo-template").append('<img src="' + newImg + '" />');
  $("img").addClass( "landscape" );
});
