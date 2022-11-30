$(document).ready(function() {
     $('.about-us').on('click', function(){
          $('div.about').removeClass('nascosto');
          $('button.close-about-us').removeClass('nascosto');
          $('button.about-us').addClass('nascosto');
     });
     $('.close-about-us').on('click', function(){
          $('div.about').addClass('nascosto');
          $('button.close-about-us').addClass('nascosto');
          $('button.about-us').removeClass('nascosto');
     });
});
