//$('h1').hide();
//$('h1#encabezado1').hide();
$('#encabezado1').css('color','green');
$('.encabezado2').css('color','#98ac45');

$('.parr2').hover(function(){
  $('.parr2').css(
    {
      "color": "#6734ac",
      "background": "black",
      "font-family": "verdana"
    })
});

//$('.contenedor ul').addClass('listas');
//$('.contenedor ul').removeClass('listas');
$('#btn1').click(function(){
  $('.contenedor ul').toggleClass('listas');
});

//$('.contenedor').html('<h1>Hola Mundo</h1>');

$('ul').append('<li>Este li fue agregado</li>');

$('ul').prepend('<li>Este li fue agregado AL INICIO</li>');

$('ul').before('<h2>Este es un hermano antes</h2>');

$('ul').after('<h2>Este es un hermano despues</h2>');

$('#btnLimpiar').click(function(){
  $('ul').empty();
});

$('#txtLista').keyup(function(e){
  let code = e.which;
  if(code == 13){
    e.preventDefault();
    $('ul').append('<li>'+e.target.value+'</li>');
    e.target.value = "";
  }
});

var materias = ["DSP404","DAW404","SES404"];

$.each(materias,function(i,val){
  $('ul').append('<li>'+val+'</li>');
});


$('#lista').bind("DOMSubtreeModified",function(){
  
  var arregloLista = $('ul li').toArray();

  $.each(arregloLista,function(i,val){
    console.log(val.innerHTML);
  })
  
});

$('#parr1').on('mousedown',function(){
  $('#parr1').toggleClass('mouseenter');
  console.log("mouse enter");
});

$('#parr1').on('mouseup',function(){
  $('#parr1').toggleClass('mouseleave');
  console.log("mouse leave");
});

/*$('#parr1').on('mousemove',function(){
  $('#parr1').toggleClass('mousemove');
  console.log("mouse move");
});*/