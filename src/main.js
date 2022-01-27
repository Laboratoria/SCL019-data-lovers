// import { example } from './data.js';

import data from './data/athletes/athletes.js';
let xs = data.athletes;
console.log(xs);

let root = document.getElementById("table");

// window.addEventListener("load", addAllCharacters(xs));

    for (let i =0; i < xs.length; i++){
        let tarjeta = document.createElement("div");
        let name= document.createElement("p");

        tarjeta.setAttribute("class", "cell"); 
        tarjeta.setAttribute("id", "card"); 
        
        name.innerHTML = xs[i].name;
            
        root.appendChild(tarjeta);
        tarjeta.appendChild(name);
    }





