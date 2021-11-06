const arr = ["a", 10, "b", "hola", 122, 15];

const obter_apenas_letras = (arr) => {  
  return arr.filter(element =>typeof (element) === 'string');
};

const obter_apenas_numeros = (arr) =>{
return arr.filter(element => typeof (element) === 'number');
}

const obter_maior_numero = (arr) => {
  const numero = obter_apenas_numeros(arr);
  return Math.max(...numero);

};

function algoritmo_percorre_array_unidimensional(arr) {
 return ` 
 Apenas Letras => ${ obter_apenas_letras(arr)}  
 Apenas Numero =>${ obter_apenas_numeros(arr)}
 Maior Numero => ${ obter_maior_numero(arr)}
 `
};


// console.log(algoritmo_percorre_array_unidimensional(arr));