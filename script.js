var data;

$.get('data/news.json', function(d) {
  data = JSON.parse(d);
  data.forEach(function(news) {
    // $("#books").append(`<div><h2>${news.title}</h2><p>${news.author}</p></div>`);
    console.log(news)
  });
});