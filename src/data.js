// estas funciones son de ejemplo

//export const example = () => {
 // return 'example';
//};

//export const anotherExample = () => {
//  return 'OMG';
//};

//funcion filtrar genero 
export const filterGenero = (data, valor) =>{
  const generoFemenino = data.filter(items =>(items.gender===valor));
  return generoFemenino;
  
}; 