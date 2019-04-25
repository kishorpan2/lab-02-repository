// const animalImg = [];
// const animalName = [];

function Image(data){
  this.image_url = data.image_url;
  this.title = data.title;
  this.description = data.description;
  this.keyword = data.keyword;
  this.horns = data.horns;
}

Image.allPics = [];



function getData(){
  $.getJSON('./data/page-1.json', function(data) {
    Object.keys(data).forEach(function(i){
      Image.allPics.push(new Image(data[i]));
      // let tempURL = {};
      // let tempName = {};
      $('#photo-template').append('<li><img src="' + data[i].image_url + '" /></li><span>'+data[i].title+'</span>');
      $('img').addClass('landscape');
      // $('select').append($('<option>', {value:data[i].image_url, text:data[i].keyword}));
      // tempURL.imgUrl = data[i].image_url;
      // tempName.names = data[i].keyword;
      // Image.allPics.push(tempURL);
    });
  });
}

function fillSelect(){
  let options = [];
  for(let i = 0; i < Image.allPics.length; i++){
    if(!options.includes(Image.allPics[i].keyword)){
      $('select').append($('<option>', {value:Image.allPics[i].keyword, text:Image.allPics[i].keyword}));
      options.push(Image.allPics[i].keyword);
    }
  }
}

// $('select').change(function(){
//   let newImg = $(this).val();
//   console.log('Selected value: ' + $(this).val());
//   var newpic = document.getElementById('photo-template');
//   while (newpic.firstChild) {
//     newpic.removeChild(newpic.firstChild);
//   }
//   $('#photo-template').append('<img src="' + newImg + '" />');
//   $('img').addClass( 'landscape' );
// });

$('select').change(function(){
  let newImg = $(this).val();
  if(newImg !== 'default'){
    $('span').remove();
    $('img').remove();
    // $('h2').remove();
    for(let i = 0; i < Image.allPics.length; i++){
      if(Image.allPics[i].keyword === newImg){
        $('#photo-template').append('<li><img src="' + Image.allPics[i].image_url + '" /></li><span>'+Image.allPics[i].title+'</span>');
        $('img').addClass( 'landscape' );
      }
    }
  }
});

getData();

setTimeout(function(){
  fillSelect();
}, 1000);
