// import { example } from './data.js';

import data from './data/athletes/athletes.js';
let athletes = data.athletes;
console.log(athletes);

let root = document.getElementById("table");

// window.addEventListener("load", addAllCharacters(xs));

    for (let i =0; i < athletes.length; i++){
        let tarjeta = document.createElement("div");
        let name= document.createElement("p");

        tarjeta.setAttribute("class", "cell"); 
        tarjeta.setAttribute("id", "card"); 
        
        name.innerHTML = athletes[i].name;
            
        root.appendChild(tarjeta);
        tarjeta.appendChild(name);
    }





