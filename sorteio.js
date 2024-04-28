function sortearElemento1(numeros) {
    const indiceAleatorio1 = Math.floor(Math.random() * numeros.length);
    return numeros[indiceAleatorio1];
  }
  function sortearElemento2(letras) {
    const indiceAleatorio2 = Math.floor(Math.random() * letras.length);
    return letras[indiceAleatorio2];
  }
  const numeros =  ['5','1','2','3','4','5','6','7','8','9']
  const letras=['a','b','c']

const elementoSorteado1 = sortearElemento1(numeros); 
const elementoSorteado2 = sortearElemento2(letras);


console.log(elementoSorteado1, elementoSorteado2);

