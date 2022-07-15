//Inicializamos las palabras claves como un array, el programa podría incluir la opción de que el usuario cargue sus propias keywords.
var keywords = ['a','aa','aaa'];

var ifContiene;

//Capturamos la palabra que deseamos filtrar a través de un input asociado a un botón.
var botonFiltrar = document.querySelector("#filtrar-palabra");

//Evento asociado al botón.
botonFiltrar.addEventListener("click",function(event){
    event.preventDefault();
    
    //Captamos el formulario y la palabra ingresada.
    var form = document.querySelector("#word-form") 
    var word = document.querySelector("#ingresar-palabra").value + ""; 
    leerPalabra(word);
    var wordTr = construirTr(word);

    var error = validarPalabra(word);
    
    //Si el array de errores no está vacío se lanza un alert con los errores ocasionados y no se imprime la celda.
    if(error.length > 0){
        alert(error);
        return;
    }

    //Captamos la tabla y agregamos Tr y Td a la misma.
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
    td.textContent = word + ifContiene + "filtrado";
    return td;
}

//Función para validar que en el formulario sea obligatorio ingresar al menos un caracter.
function validarPalabra(word){
    var error = []

    if(word.length == 0){
        error.push("Introduzca una palabra para continuar");
    }
    return error;
}

function leerPalabra(word){
    var keywordsInWord = word.includes(keywords);
    if (keywordsInWord == true){
        console.log("Ahi tenes las keywords pa contratame");
        ifContiene == " contiene las palabras claves ";
    }
    else{
        console.log("no contiene palabras clave.")
        ifContiene == " no contiene palabras clave.";
    }
}


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