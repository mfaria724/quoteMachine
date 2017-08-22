$(document).ready(function() { 

  var contador = 0;

  $('#newQuote').click(function() {
      $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json){
        $('#quote').html('"' + json.quoteText + '"');
        if (json.quoteAuthor==""){
          json.quoteAuthor="Anonymous";
        }
        $('#author').html(' - ' + json.quoteAuthor);
        if (contador == 0){
          $('#tweet').removeClass('btn-info');
          $('#tweet').addClass('btn-danger');
          $('#newQuote').removeClass('btn-info');
          $('#newQuote').addClass('btn-danger');
          $('#link').addClass('a-red'); document.getElementById("author").style.color="rgb(178,18,18)";//Red
          document.getElementById("quote").style.color="rgb(178,18,18)";//Red
          document.getElementById("sign").style.color="rgb(178,18,18)";//Red
          document.getElementById("background").style.backgroundColor = "rgb(178,18,18)";//Red
          contador = 1;
        }
        else if (contador == 1){
          $('#tweet').removeClass('btn-danger');
          $('#tweet').addClass('btn-warning');
          $('#newQuote').removeClass('btn-danger');
          $('#newQuote').addClass('btn-warning');
          $('#link').removeClass('a-red');
          $('#link').addClass('a-orange');
          document.getElementById("author").style.color="rgb(255,135,0)";//Orange
          document.getElementById("quote").style.color="rgb(255,135,0)";//Orange
          document.getElementById("sign").style.color="rgb(255,135,0)";//Orange
          document.getElementById("background").style.backgroundColor = "rgb(255,135,0)";//Orange
          contador = 2;
        }
        else if(contador == 2){
          $('#tweet').removeClass('btn-warning');
          $('#tweet').addClass('btn-info');
          $('#newQuote').removeClass('btn-warning');
          $('#newQuote').addClass('btn-info');
          $('#link').removeClass('a-orange');
          document.getElementById("author").style.color="rgb(20,133,204)";//Blue
          document.getElementById("quote").style.color="rgb(20,133,204)";//Blue
          document.getElementById("sign").style.color="rgb(20,133,204)";//Blue
          document.getElementById("background").style.backgroundColor = "rgb(20,133,204)";//Blue
          contador = 0;
        }
      });
  })    

  $('#tweet').click(function() {  
    window.open("https://twitter.com/intent/tweet?text=" +  document.getElementById("quote").innerText +  document.getElementById("author").innerText);
  });
});