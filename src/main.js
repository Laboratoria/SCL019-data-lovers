// import { example } from './data.js';

import { filterGenero } from './data.js';
import data from './data/athletes/athletes.js';
let athletes = data.athletes;
console.log(athletes);

let root = document.getElementById("table");

// window.addEventListener("load", addAllCharacters(xs));
const card = (data) => {
    let tarjeta = document.createElement("div");
    let name= document.createElement("p");
    
    name.innerHTML = ''
    for (let i =0; i < data.length; i++){

        tarjeta.setAttribute("class", "cell"); 
        tarjeta.setAttribute("id", "card"); 
        
        name.innerHTML = data[i].name;
            
        root.appendChild(tarjeta);
        tarjeta.appendChild(name);
    }
    
    }

    window.addEventListener('load',()=>{
        card(athletes)
    })

//filtro genero
 const femFiltro = document.querySelector('#fem');
 femFiltro.addEventListener('click', ()=>{
    let resultado = filterGenero(athletes,'F')
    card(resultado)
    console.log(resultado)
     
 });


