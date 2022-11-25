$(document).ready(function() {
     $('.bellante').on('click', function(){
          console.log($(this).val());
          $('div.bellante').removeClass('hide');
          $('div.pescara').addClass('hide');
          $('div.teramo').addClass('hide');
          $('div.sanbenedetto').addClass('hide');
          $('#punto_scelto').empty();
          $('#punto_scelto').append($(this).val());
     });
     $('.pescara').on('click', function(){
          $('div.pescara').removeClass('hide');
          $('div.bellante').addClass('hide');
          $('div.teramo').addClass('hide');
          $('div.sanbenedetto').addClass('hide');
          $('#punto_scelto').empty();
          $('#punto_scelto').append($(this).val());
     });
     $('.teramo').on('click', function(){
          $('div.teramo').removeClass('hide');
          $('div.bellante').addClass('hide');
          $('div.pescara').addClass('hide');
          $('div.sanbenedetto').addClass('hide');
          $('#punto_scelto').empty();
          $('#punto_scelto').append($(this).val());
     });
     $('.sanbenedetto').on('click', function(){
          $('div.sanbenedetto').removeClass('hide');
          $('div.bellante').addClass('hide');
          $('div.pescara').addClass('hide');
          $('div.teramo').addClass('hide');
          $('#punto_scelto').empty();
          $('#punto_scelto').append($(this).val());
     });
});
