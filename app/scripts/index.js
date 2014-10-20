'use strict';
document.addEventListener('DOMContentLoaded', function() {
  var h1 = document.getElementsByTagName('h1');
  if (h1.length > 0) {
    h1[0].innerText = h1[0].innerText + ' \'Allo';
  }
}, false);



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

      var $xml = $(data);
      $xml.find("item").each(function() {

        var $this = $(this);

        console.log($this.find("title").text());

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
