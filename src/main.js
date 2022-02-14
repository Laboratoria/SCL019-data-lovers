// import { example } from './data.js';

import { filterGenero } from './data.js';
import {filterSport} from './data.js';
import {filterNoc} from './data.js';
import {ordenarAZ, ordenarZA} from './data.js';
import data from './data/athletes/athletes.js';



let athletes = data.athletes;                                // crear variable que contiene info de los atletas
//console.log(athletes);
let root = document.getElementById("table");                 // se llamma al elemento con id Table (es donde ira la info de los atletas, segun nuestro html)


const card = (data) => {                                     // crear una funcion que recorra la data de los atletas y con ello cree un elemento div para que pueda imprimir en pantalla los datos de cada atleta 

    root.innerHTML = '';                                     // cada elemento div creado parta en 0
    
    for (let i =0; i < data.length; i++){                    // repetir las sgtes instrucciones:

        let tarjeta = document.createElement("div");
        let photo = document.createElement("img");          // crear  un elemento  <div>         
        let name= document.createElement("h3"); 
        let sport= document.createElement("p"); 
        let team= document.createElement("p");               // crear un elemneto <p> para ingresar la info
        let medal= document.createElement("p");                   
        
        tarjeta.setAttribute("class", "cell");               // a la var creada, se le dan atributos  
        tarjeta.setAttribute("id", "card"); 
        photo.setAttribute("class", "imgIcono");                 // a la var creada, se le dan atributos de Id, card 
        
                         
        
        name.innerHTML = data[i].name;                       // que nos imprima el nombre en HTML                      
        sport.innerHTML = "Deporte: " + data[i].sport; 
        team.innerHTML = "Pais: " + data[i].team; 
        medal.innerHTML = "Medalla: " + data[i].medal;   
         
        if (data[i].gender === 'F'){
            photo.innerHTML = photo.src = "iconoMujer.png";
        } else {
            photo.innerHTML = photo.src = "IconoHombre.png";
        }
           
        
        root.appendChild(tarjeta);                      // esta parte le otorga el orden dentro de la
        tarjeta.appendChild(photo);                    // crea el. hijos igual a la tarjeta definida en html                                        
        tarjeta.appendChild(name);                      // la tarjeta llevara  el elemento hijo
        tarjeta.appendChild(sport); 
        tarjeta.appendChild(team);  
        tarjeta.appendChild(medal);
         
                                
    }
    
    }

    window.addEventListener('load',()=>{                     // Evento que al abrir nuestra pagina aparezcan las card(tarjetas con nombre de atletas)
        card(athletes)
    })

    

//filtro segun genero e imprimir en HTML
 const atletasFiltro = document.getElementById('atletasMedallistas');                 //se crea var, que llame desde el select creado, select que tiene 2 opciones
 
 atletasFiltro.addEventListener('change',()=>{                                        // evento que se dispara info ligada a la opcion de seleccion y que realice la sgte funcion 
     var selectGenero = atletasFiltro.options[atletasFiltro.selectedIndex].value;     // se crea var que tome las opciones desde la const aletasfiltro y segun  el valor seleccionado (F-M)
     console.log(selectGenero)

    let resultado = filterGenero(athletes,selectGenero) 
     athletes = resultado
     //console.log(resultado)                                                         // se crea var resultado que tiliza la f de filtrar en los parametrso de la data y el valor de var creada em L41
     card(athletes)                                                                  // se usa la funcion card para que nos cree el formado de var resultados 
     
     
 })
 //filtro segun deporte e imprimir en HTML
const deporteFiltro = document.getElementById('deportes');

deporteFiltro.addEventListener('change',()=>{
    var selectSport = deporteFiltro.options[deporteFiltro.selectedIndex].value;

    let deporteFiltrado = filterSport(athletes,selectSport)
    athletes = deporteFiltrado
    

    card(athletes)
    //athletes = deporteFiltrado

})

 //filtro segun país e imprimir en HTML
 const paisesFiltro = document.getElementById('paises');

 paisesFiltro.addEventListener('change',()=>{
     var selectPais = paisesFiltro.options[paisesFiltro.selectedIndex].value;
        console.log(selectPais)

     let paisFiltrado = filterNoc(athletes,selectPais)
     athletes = paisFiltrado
 
     card(athletes)
     //athletes = paisFiltrado
 
        //console.log(paisFiltrado)

 })
//filtro orden alfabeticamente
 const alfabeto = document.getElementById ('ordenarSort');
    alfabeto.addEventListener('change', (evento) =>{
        var optionSelecionado = evento.target.value;
        if (optionSelecionado === 'az'){
            
            let sortAZ = ordenarAZ(athletes);
            athletes = sortAZ
            
            card(athletes)
        }
        if (optionSelecionado === 'za'){
            
           let sortZA = ordenarZA(athletes);
           athletes = sortZA
           card(athletes)
        }

});

//Boton limpiar filtros
const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
    location.reload();
}
refreshButton.addEventListener('click', refreshPage)
