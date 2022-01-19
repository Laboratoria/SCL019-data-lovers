//import { example } from './data.js';//
import data from './data/ghibli/ghibli.js';

const movies= data.films;
const container = document.getElementById("boxfilms");

const img=(movies, i) =>{ 
return `<div>
    <img src="${movies.poster}" id="${i}" class= "listPoster"/>
</div> `;
};
for(let i= 0; i < movies.length; i++){
    container.innerHTML += img(movies[i], i);
  }

const images= document.getElementsByClassName("listPoster");
for (let i = 0; i < images.length; i++) {
  const element = images[i];
  console.log(element);
}


