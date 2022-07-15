//Inicializamos las palabras claves como un array, el programa podría incluir la opción de que el usuario cargue sus propias keywords
var keywords = ['a','aa','aaa']; 

//Capturamos la palabra que deseamos filtrar a través de un input
var botonFiltrar = document.querySelector("#filtrar-palabra");

botonFiltrar.addEventListener("click",function(event){
    event.preventDefault();

    var word = document.querySelector("#ingresar-palabra");
    console.log(word);
   
});

function capturarPalabra(form){

}
    //var form = document.querySelector("#form-adicionar"); 



/*
var campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input",function(){
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for (var i = 0; i < pacientes.length ; i++){
            var paciente = pacientes[i];
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            var expresion = new RegExp(this.value,"i");
            if(!expresion.test(nombre)){
                paciente.classList.add("invisible");
            }else{
                paciente.classList.remove("invisible");
            }   
        }
    }else{
        for (var i = 0; i < pacientes.length ; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }    
    } 
});
*/