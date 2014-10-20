'use strict';

$(function() {

  console.log('Fronter Feeder starting...');
  //var last = document.getElementById('last');
  //var passord = document.getElementById('passord');
  //var brukernavn = document.getElementById('brukernavn');
 var url = 'https://fronter.com/uia/rss/get_today_rss.php?elements=default&LANG=no';

$('#last').click(function(){

  console.log('Logger på med brukernavn: ', $('#brukernavn').val());


  var jqxhr = $.ajax({url: url, username: $('#brukernavn').val(), password: $('#passord').val()} )
    .done(function(data) {



      //$('#login').hide();

              var feedElement = $('#feed');

      feedElement.html('');

      var $xml = $(data);
      $xml.find("item").each(function() {

        var $this = $(this);
        feedElement.append('<h3>' + $this.find("title").text() + '</h3>');
        feedElement.append('<p>Dato: ' + $this.find("pubDate").text() + ' - Forfatter: ' + $this.find("author").text()  + '</p>');
        feedElement.append('<p>' + $this.find("description").text() + '</p>');

      });

      console.log(data);
      console.log( "success" );

    })
    .fail(function() {
      console.log( "error" );
    })
    .always(function() {
      console.log( "complete" );
    });
});


});
