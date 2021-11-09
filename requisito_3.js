function geraId(){
  const letra = () => {
      return String.fromCharCode(65 + Math.random() * 26)
    }
  
  const reduce = Array(16).fill(0).reduce(prev => {
      return {
        alpha: prev.alpha + letra(),
      }
  }, {alpha: ''})

let string = reduce.alpha;
let posicaoDoTerceiroTraco = string.length - 4;
let resultado = string.substr(0,posicaoDoTerceiroTraco)+"-"+string.substr(posicaoDoTerceiroTraco);

let posicaoDoSegundoTraco =resultado.length - 9;
let resultado_two = resultado.substr(0,posicaoDoSegundoTraco)+"-"+resultado.substr(posicaoDoSegundoTraco);

let metade =resultado_two.length - 14;
let idCompleto = resultado_two.substr(0,metade)+"-"+resultado_two.substr(metade);

return idCompleto;
}


let id = geraId();
// console.log(id)