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


/*hide*/
$('#btnjQuery2').on('click', () => {
    $(".ver-menos").hide();  
})


const URLJSON = "users.json"

$(".json").prepend('<button id="btn1">JSON</button>');

$("#btn1").on('click',() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $(".json").prepend(`<div>
                                <h3>Nombre: ${dato.name}</h3>
                                <p>Email:${dato.email}</p>
                            </div>`)
      }  
    }
    });
});




$('#btnjQuery').on('click', () => {
    $(".ver-menos").toggle(); 
})