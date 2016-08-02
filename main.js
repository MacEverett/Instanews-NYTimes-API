// Every jQuery file needs this below declaration first
// It's how the browswer knows you're using jQuery
$(document).ready(function() {
   // I don't think you actually need this??? 
   // also, what is selectBoxIt()?
    // $('#my-select').selectBoxIt();
    $('select').on('change', function() {
        event.preventDefault();


        // Loader GIF PLUGIN
        $('.news-articles').empty();
        $('.loading').show();

let selection = $('.select-opt').val();
// Creating a variable for your ajax url
// we were suppose to have looked at the documentation for calling the NYT api here:
// http://developer.nytimes.com/top_stories_v2.json#/Documentation/GET/%7Bsection%7D.%7Bformat%7D
// and then filled in the selection piece and API piece
var url = "https://api.nytimes.com/svc/topstories/v2/"+ selection +".json";
    url += '?' + $.param({'api-key': "ef43ab47a0a346a0bcc26f115a1a64f2"});
// CALL AJAX TO FETCH DATA
    $.ajax({
        method: 'GET',
    // so now this url will look to the variable we created two lines above and use it to fetch the information
        url: url,
    }).done(function(data) {
        console.log(data.results);
    });
    // that works sometimes...? above not sure what the issue is exactly...
// I commented out your orginal code below just to console.log the object for you! to show you properly got it

// IF ELSE STATMENT TO FILTER RESULTS
// if (data.results.length === 0) {
//     $('.news-articles').append(`<p>Sorry. Please try another section.</p>`);
// } else {
     let nytData = data.results.filter(function(item) {
//         return item.multimedia.length;
//     }).splice(0, 12)
//     .forEach(function(item, index) {
//       $('.news-articles').append(`
//         <a href="${item.url}">
//         <div class="all-articles article-${index}">
//         <div class="text-${index}">
//         <a href="${item.url}" class="text"> ${item.abstract} </a>
//         </div>
//         </div>
//         </a>`);
// // TO MAKE SURE ARTICLE HAS IMAGE
let img = item.multimedia[4];
// $('.article-' + index).css('background-image', `url("${img.url}")`);
// $('.text-'+index).hide();
// $('.article-'+index).hover(function() {
//     $('.text-'+index).slideToggle('slow', function() {});
// });
// });
// }
// //  TEXT HIDE
// }).always(function($('.loading').hide();
// });

}); // on change brackets
}); // document ready brackets
