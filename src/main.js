// import { example } from './data.js';

import { filterGenero } from './data.js';
import data from './data/athletes/athletes.js';

let athletes = data.athletes;                                // crear variable que contiene info de los atletas
console.log(athletes);
let root = document.getElementById("table");                 // se llamma al elemento con id Table (es donde ira la info de los atletas, segun nuestro html)


const card = (data) => {                                     // crear una funcion que recorra la data de los atletas y con ello cree un elemento div para que pueda imprimir en pantalla los datos de cada atleta 

    root.innerHTML = '';                                     // cada elemento div creado parta en 0
    
    for (let i =0; i < data.length; i++){                    // repetir las sgtes instrucciones:

        let tarjeta = document.createElement("div");         // crear  un elemento  <div> 
        let name= document.createElement("p");               // crear un elemneto <p> para ingresar la info 
        
        tarjeta.setAttribute("class", "cell");               // a la var creada, se le dan atributos  
        tarjeta.setAttribute("id", "card");                  // a la var creada, se le dan atributos de Id, card 
        
        name.innerHTML = data[i].name;                       // que nos imprima el nombre en HTML
        
            
        root.appendChild(tarjeta);                           // crea el. hijos igual a la tarjeta definida en html
        tarjeta.appendChild(name);                           // la tarjeta llevara  el elemento hijo
    }
    
    }

    window.addEventListener('load',()=>{                     // Evento que al abrir nuestra pagina aparezcan las card(tarjetas con nombre de atletas)
        card(athletes)
    })

//filtro segun genero e impromir en HTML
 const atletasFiltro = document.getElementById('atletasMedallistas');                 //se crea var, que llame desde el select creado, select que tiene 2 opciones
 
 atletasFiltro.addEventListener('change',()=>{                                        // evento que se dispara y usa los datos ligados a la opcion dando respuesta segun seleccion y que realice la sgte funcion 
     var selectGenero = atletasFiltro.options[atletasFiltro.selectedIndex].value;     // se crea var que tome las opciones desde la const aletasfiltro y segun  el valor seleccionado (F-M)
     console.log(selectGenero)

     let resultado = filterGenero(athletes,selectGenero)                              // se crea var resultado que tiliza la f de filtrar en los parametrso de la data y el valor de var creada em L41
     card(resultado)                                                                  // se usa la funcion card para que nos cree el formado de var resultados 
     console.log(resultado)
     
 })
 
//femFiltro.addEventListener('click', ()=>{
    //let resultado = filterGenero(athletes,'F')
    //card(resultado)
    //console.log(resultado)
     
 //});


