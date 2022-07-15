//Inicializamos las palabras claves como un array, el programa podría incluir la opción de que el usuario cargue sus propias keywords.
var keywords = ['a','aa','aaa']; 

//Capturamos la palabra que deseamos filtrar a través de un input asociado a un botón.
var botonFiltrar = document.querySelector("#filtrar-palabra");

botonFiltrar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#word-form")
    var word = document.querySelector("#ingresar-palabra").value + "";
    var wordTr = construirTr(word);

    var error = validarPalabra(word);
    
    var tabla = document.querySelector("#tabla-palabras");
    tabla.appendChild(wordTr);
    form.reset();
   
});

//Función que agrega la fila a la tabla, donde se construirá el Td con la palabra ingresada y el resultado de búsqueda de las palabras claves.
function construirTr(word){
    var wordTr = document.createElement("tr");
    wordTr.appendChild(construirTd(word));
    return wordTr;
}

//Función que asigna el Td al Tr.
function construirTd(word){
    var td = document.createElement("td");
    td.textContent = word + " contiene las palabras claves " + "filtrado";
    return td;
}

function validarPalabra(word){
    var error = []

    if(word.length == 0){
        error.push("Introduzca una palabra para continuar");
    }

    return error;

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