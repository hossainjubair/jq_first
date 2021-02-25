//text change

$(document).ready(function(){
    //alert("welcome to ssb");
    // $('.btnc').click(function(){
    //  alert("Hello ssb")
    // });
     // hide
     // counter
     new WOW().init();
     $('.counter').counterUp({
    delay: 10,
    time: 1000
     });

    $('#hide').click(function(){
    	$('h2').hide("slow");
    });
    // show
    $('#show').click(function(){
    	$('h2').show("fast");

    });
    $('#toggle').click(function(){
    	$('h2').toggle(1000);
    });
    $('#fadetoggle').click(function(){
    	$('h2').fadeToggle("fast");
    });
    $('#fadein').click(function(){
    	$('h2').fadeIn(2000);
    });
     $('#fadeout').click(function(){
    	$('h2').fadeOut(2000);
    });
      $('#fadeto').click(function(){
    	$('h2').fadeTo(1000, 0.1);
    });
      $('.panel').click(function(){
      	$('.content').slideToggle(1000);
      });

      $( "#draggable" ).draggable();
      $( "#accordion" ).accordion({
      	collapsible: true
      });


    
});

