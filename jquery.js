$(() => {
    console.log('El DOM esta listo');
});


$('#form').on('submit',function(e){
    e.preventDefault()
    console.log($("#nombre").val())
    console.log($("#tel").val())
    console.log($("#mensaje").val())
})


$('#btnjQuery').on('click', () => {
    console.log("Respuesta al click");
})




