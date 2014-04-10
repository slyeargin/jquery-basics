(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#btn').click(doStuff);
    $('#inception').click(changeBtn);
    $('#btn3').click(doStuff3);
    $('#btn4').click(doStuff4);
    $('#btn5').click(doStuff5);
    $('#btn6').click(doStuff6);
    $('#btn7').click(doStuff7);
  }

  function doStuff(){
    $('h1').css('color','red');
    $('h2').css('background','#ccc');
    $('h3').text('Samantha');
  }

  function changeBtn(){
    $('#inception').text('Ha, ha, sucker.');
    $('#btn').text('You should have clicked ME');
  }

  function doStuff3(){
    $('body').addClass('alert');
  }

  function doStuff4(){
    $('body').removeClass('alert');
  }

  function doStuff5(){
    $('body').toggleClass('alert');
  }

  function doStuff6(){
    var x = $('#tb1').val();
    $('h1').text(x.toUpperCase());
  }
  function doStuff7(){
    var x = $('#tb1').val();
    $('h3').css('color', x);
  }

})();
