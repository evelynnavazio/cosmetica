$(() => {
    console.log('El DOM esta listo');
});

/*Formulario*/
$('#form').on('submit',function(e){
    e.preventDefault()
    console.log($("#nombre").val())
    console.log($("#tel").val())
    console.log($("#mensaje").val())
    console.log($("#email").val())
    alert("Envio exitoso!")
})

$("#texto-oculto").prepend('<h3  style="display: none" >Mas sobre cosmética</h3>');

/*show*/
$('#btnjQuery').on('click', () => {
    $("h3").show(); 
})

/*hide*/
$('#btnjQuery2').on('click', () => {
    $(".ver-menos").hide();  
})

//Declaramos la url del archivo JSON local
const URLJSON = "users.json"
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">JSON</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").on('click',() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("body").prepend(`<div>
                                <h3>${dato.name}</h3>
                                <p> ${dato.email}</p>
                            </div>`)
      }  
    }
    });
});
