//Capturamos la palabra que deseamos filtrar a través de un input asociado a un botón.
var botonFiltrar = document.querySelector("#filtrar-palabra");

var keywordList = [];

//Evento asociado al botón.
botonFiltrar.addEventListener("click",function(event){
    event.preventDefault();
    
    //Captamos el formulario y la palabra ingresada.
    var form = document.querySelector("#word-form") 
    var word = document.querySelector("#word").value.toString();
    var keywords = document.querySelector("#keywords").value.toString();
    var keywordList = keywords.split(" ");

    var wordTr = construirTr(word);

    var error = validarPalabra(word);
    
    //Si el array de errores no está vacío se lanza un alert con los errores ocasionados y no se imprime la celda.
    if(error.length > 0){
        alert(error);
        return;
    }

    filtrado(word, keywordList);
    console.log(word, keywords, keywordList);
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
function construirTd(word, text, keyword){
    var td = document.createElement("td");
    td.textContent = word + text + keyword;
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

function leerPalabra(keyword){
    var ifContiene = false;
    if (word.toString().includes(keyword.toString())){
        ifContiene = true;
        return ifContiene;
    }
    else{
        return ifContiene;
    }
}

function filtrado(word, keywordList){
    keywordList.forEach(keyword => {
        if(leerPalabra(keyword)){
        
            //keywordList.push(keyword);
            word.replace(keyword,"");
            construirTd(word," contiene la palabras clave ", keyword)
            
        }
        else{
            construirTd(word," no contiene la palabra ", keyword)
        }    
    });
}
