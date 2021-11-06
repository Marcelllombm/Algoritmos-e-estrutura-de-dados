let operacao_matematica = {
  adicao: function (valores = []) {
    try {
      return valores.reduce((acc, numeros) => acc + numeros);
    }
    catch (err) {
      return 'Para fazer operação deverá ter no minino dois valores';
    }
  },

  subtracao: function (valores = []) {
    try {
      return valores.reduce((acc, numeros) => acc - numeros);
    }
    catch (err) {
      return 'Para fazer operação deverá ter no minino dois valores';
    }
  },

  multiplicacao: function (valores = []) {
    try {

      return valores.reduce((acc, numeros) => acc * numeros);
    }
    catch (err) {
      return 'Para fazer operação deverá ter no minino dois valores';
    }
  },

  divisao: function (valores = []) {
    try {
      if (valores[0] !== 0 && valores[1] !== 0) {
        return valores[0] / valores[1];
      } else {
        return 'valores tem que ser diferente de zero'
      }
    }
    catch (err) {
      return 'Para fazer operação deverá ter dois valores';
    }
  }

}

// console.log(operacao_matematica.adicao([10,5]))
// console.log(operacao_matematica.subtracao([12,10]))
// console.log(operacao_matematica.multiplicacao([20,20,2]))
// console.log(operacao_matematica.divisao([20,5]))
