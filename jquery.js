$(() => {
    console.log('El DOM esta listo');

/*Formulario*/
$('#form').on('submit',function(e){
    e.preventDefault()
    console.log($("#nombre").val())
    console.log($("#tel").val())
    console.log($("#mensaje").val())
    console.log($("#email").val())
})
$( ".ver-mas" ).on('click',function() {
    $( ".img-1" ).slideToggle( "slow" );
  });

})







 


