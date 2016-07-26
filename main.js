$(function() {
$('#my-select').selectBoxIt();
$('select').on('change', function() {
event.preventDefault();


// Loader GIF PLUGIN
$('.news-articles').empty();
$('.loading').show();

let selection = $('.select-opt').val();
// CALL AJAX TO FETCH DATA
$.ajax({
method: 'GET',
url:`http://api.nytimes.com/svc/topstories/v2/${selection}.json?api-key=ef43ab47a0a346a0bcc26f115a1a64f2`,
}.done(function(data) {
// IF ELSE STATMENT TO FILTER RESULTS
if (data.results.length === 0) {
    $('.news-articles').append(`<p>Sorry. Please try another section.</p>`);
} else {
    let nytData = data.results.filter(function(item) {
        return item.multimedia.length;
    }).splice(0, 12)
    .forEach(function(item, index) {
          $('.news-articles').append(`
            <a href="${item.url}">
            <div class="all-articles article-${index}">
            <div class="text-${index}">
            <a href="${item.url}" class="text"> ${item.abstract} </a>
            </div>
            </div>
            </a>`);
// TO MAKE SURE ARTICLE HAS IMAGE
let img = item.multimedia[4];
$('.article-' + index).css('background-image', `url("${img.url}")`);
$('.text-'+index).hide();
$('.article-'+index).hover(function() {
    $('.text-'+index).slideToggle('slow', function() {});
                    });
                  });
                }
//  TEXT HIDE
}).always(function($('.loading').hide();
});

    });
});
