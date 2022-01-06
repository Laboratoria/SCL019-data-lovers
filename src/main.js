import { filterAZ, filterZA, filterDataYearAsc, filterDataYearDesc, filterDataDirector, filterDataProducer } from './data.js';


import data from './data/ghibli/ghibli.js';

// Constantes
const dataStudioGhibli = data.films;
const headerMain = document.getElementById('header')
const containerMain = document.getElementById('main__animations');
const footerMain = document.getElementById('footer');
const containerAnimationes = document.getElementById('animations');
const filterLetterOrder = document.getElementById('filters__initial');
const filterXDirector = document.getElementById('filters__director');
const filterXProducer = document.getElementById('filters__producer');
const filterYear = document.getElementById('filters__year');


/* 
const animation = data.films;
let animationLength = animation.length;

let theAnimation = "<section>";
for (let i = 0; i < animationLength; i++) {

    theAnimation += "<article>" +
        `<img src="${animation[i].poster}" alt="">
    <p <span class="negrita"> Titulo: ${animation[i].title}</p> 
    <p> <span class="negrita">Producer: </span>${animation[i].producer}</p> 
    <p><span class="negrita">Año: </span> ${animation[i].release_date}</p>
    <p><span class="negrita">Score: </span> ${animation[i].rt_score}</p>`;
    + "</article>";
}
theAnimation += "<section>";

document.getElementById("animations").innerHTML = theAnimation; 
*/

/*
// Recorre la data y crea las tarjetas con su respectiva información sacada de la data.

 const dataGhibli = data.films.map((arr) => {
    let ghibliData = `<article class="animations__card"> <a href="#"><img class="animations__card__img" src="${arr.poster}"alt="Imagen de la película de animación"></a>
    <h4>${arr.title}</h4>
    <p>Año: ${arr.release_date}</p>
    <p>Productor: ${arr.producer}</p>
    <p>Score: ${arr.rt_score} </p>
   </article>`;
    return ghibliData;
}) 


//document.getElementById("animations").innerHTML = dataGhibli.join('');
*/

// Creación de tarjetas dinamicas que llama información del objeto.data.ghibli
// Se crea una función que lleva dentro un forEach que recorre el parametro que le de creando así las tarjetas. Al final llamo a la función y le doy el parametro de la data del estudio ghibli para que pueda crear las tarjetas.
const displayCardGhibli = (ghibliData) => {
    containerAnimationes.innerHTML = "";
    //contador de peliculas segun filtro

    document.getElementById("countFilms").innerHTML = `Estas visualizando: ${ghibliData.length} peliculas`;
    ghibliData.forEach((arr) => {

        containerAnimationes.innerHTML += `<article id="animations__card" class="animations__card">
        <img class="animations__card__img" src="${arr.poster}"alt="Imagen de la película de animación">
        <h4>${arr.title}</h4>
        <p><span class="black">Año:</span> ${arr.release_date}</p>
        <p><span class="black">Director:</span> ${arr.director}</p>
        <p><span class="black">Productor:</span> ${arr.producer}</p>
        <p><span class="black">Score:</span> ${arr.rt_score}</p>
       </article>`;

        // Tiene que ir adentro para que funcione al dar click en todas las tarjetas, incluso a las que se toman con filtro. 
        const animationsCard = document.querySelectorAll('.animations__card');
        for (let i = 0; i < animationsCard.length; i++) {
            animationsCard[i].addEventListener('click', (e) => {
                e.preventDefault();
                containerMain.style.display = 'none';
                //headerMain.classList.remove('header')
            })
        }
    });

};
displayCardGhibli(dataStudioGhibli);

// Function remover elementos


// Filtrar de la A a la Z y de la Z a la A

filterLetterOrder.addEventListener('change', () => {
    if (filterLetterOrder.value === "0") {
        const filterLetterAZ = filterAZ(dataStudioGhibli,);
        displayCardGhibli(filterLetterAZ);
    }
    if (filterLetterOrder.value === "1") {
        const filterLetterZA = filterZA(dataStudioGhibli);
        displayCardGhibli(filterLetterZA);
    }
})

//filtrar por director
filterXDirector.addEventListener('change', () => {
    switch (filterXDirector.value) {
        case 'all':
            displayCardGhibli(dataStudioGhibli);
            break;
        case '0':
            displayCardGhibli(filterDataDirector(dataStudioGhibli, "Hayao Miyazaki"));
            break;
        case '1':
            displayCardGhibli(filterDataDirector(dataStudioGhibli, "Gorō Miyazaki"));
            break;
        case '2':
            displayCardGhibli(filterDataDirector(dataStudioGhibli, "Isao Takahata"));
            break;
        case '3':
            displayCardGhibli(filterDataDirector(dataStudioGhibli, "Hiroyuki Morita"));
            break;
        case '4':
            displayCardGhibli(filterDataDirector(dataStudioGhibli, "Hiromasa Yonebayashi"));
            break;
        case '5':
            displayCardGhibli(filterDataDirector(dataStudioGhibli, "Yoshifumi Kondō"));
            break;
    }
})

//filtrar por productor
filterXProducer.addEventListener('change', () => {
    switch (filterXProducer.value) {
        case 'all':
            displayCardGhibli(dataStudioGhibli);
            break;
        case '0':
            displayCardGhibli(filterDataProducer(dataStudioGhibli, "Isao Takahata"));
            break;
        case '1':
            displayCardGhibli(filterDataProducer(dataStudioGhibli, "Toshio Suzuki"));
            break;
        case '2':
            displayCardGhibli(filterDataProducer(dataStudioGhibli, "Toru Hara"));
            break;
        case '3':
            displayCardGhibli(filterDataProducer(dataStudioGhibli, "Hayao Miyazaki"));
            break;
        case '4':
            displayCardGhibli(filterDataProducer(dataStudioGhibli, "Yoshiaki Nishimura"));
            break;
    }
})

// Ordenar los años de menor a mayor y viceversa
filterYear.addEventListener('change', () => {
    if (filterYear.value === '0') {
        const filterXYear = filterDataYearAsc(dataStudioGhibli)
        displayCardGhibli(filterXYear)
    }
    if (filterYear.value === '1') {
        const filterXYear = filterDataYearDesc(dataStudioGhibli)
        displayCardGhibli(filterXYear)
    }
})








