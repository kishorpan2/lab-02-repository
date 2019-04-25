const animalIMG = [];
const animalName = []; // array of keyword strings

function pullAndPopData(url) {
  $.getJSON(url, function(data) { 
    data.forEach(function(el) {
      $('#photo-template').append(`<li data-id="${el.keyword}"><h2>${el.title}</h2><img class="landscape" src="${el.image_url}" /></li>`);

      animalIMG.push(el);
    });
    // call our keyword duplicate checker function
    makeAnimalKeywords(animalIMG); // pass in array of objects

    // create and append <option> with filtered keywords
    animalName.forEach(el => {
      $('select').append($('<option>', {value: el, text: el}));
    });
  });
}

pullAndPopData('data/page-1.json');

$('select').change(function(){
  let selectedKeyword = $(this).val();
  console.log('Selected keyword: ' + $(this).val());
  var picList = $('#photo-template').children();
  console.log('picList', picList);

  // show or hide based on keyword
  $.each(picList, (index, value) => {
    $(value).show(); // by default show everything
    if ($(value).attr('data-id') !== selectedKeyword) {
      $(value).hide();
    }
  });
});

// filter out duplicate keywords
// check if already exists
let makeAnimalKeywords = (arr) => {

  arr.forEach(el => {
    if (!animalName.includes(el.keyword)) {
      animalName.push(el.keyword);
    }
  });
  console.log('animalName', animalName);
};

$('#page2').click(function() {
  //clear page1
  let picList = $('#photo-template').children();
  $(picList).remove();
  //we need to call the second page;
});
