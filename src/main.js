// import { example } from './data.js';

import { filterGenero } from './data.js';
import data from './data/athletes/athletes.js';

let athletes = data.athletes;
console.log(athletes);
let root = document.getElementById("table");


const card = (data) => {
    root.innerHTML = '';
    
    for (let i =0; i < data.length; i++){

        let tarjeta = document.createElement("div");
        let name= document.createElement("p");
        

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
 const atletasFiltro = document.getElementById('atletasMedallistas');
 
 atletasFiltro.addEventListener('change',()=>{
     var selectGenero = atletasFiltro.options[atletasFiltro.selectedIndex].value;
     console.log(selectGenero)
     let resultado = filterGenero(athletes,selectGenero)
     card(resultado)
     console.log(resultado)
     
 })
 
//femFiltro.addEventListener('click', ()=>{
    //let resultado = filterGenero(athletes,'F')
    //card(resultado)
    //console.log(resultado)
     
 //});


