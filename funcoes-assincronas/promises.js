// Criação de uma função com promise
function asyncFunction() {
  // Passamos 2 parametros para a Promisse que é resolve no sucesso e reject caso de algum exception ou algo do tipo
  return new Promise((resolve, reject) => {
    // Aqui no caso estamos simulando uma função assincrona
    setTimeout(() => {
      const isSuccess = true;

      if (isSuccess) {
        console.log('A operação foi concluida com sucesso');
        resolve('A operação foi concluida com sucesso');
      } else {
        console.log('Algo deu errado');
        reject('Algo deu errado');
      }
    }, 3000);
    // No pior dos casos após 3 segundos o setTimeout roda e faz a validação se deu certo ou não
  });
}

// Aqui no caso eu to esperando uma promisse que demora 3 segundos para me retornar um valor, então na função abaixo eu estou utilizando uma função assíncrona que dentro dela consigo passar um await no const fazendo com que a função espere o tempo necessário para pegar a resposta da promisse acima.

async function fetch() {
  // Abaixo eu criei um try catch para tratar o sucesso ou erro e também adicionando o finally só para demonstrar o Fim da execução da função.

  try {
    const response = await asyncFunction();
    console.log('Sucesso', response);
  } catch {
    console.log('Erro', error);
  } finally {
    console.log('Fim da execução!');
  }
}

/*
Exemplo de async numa arrow function
const fetch = async () => {
  const response = await asyncFunction();
  console.log(response);
};
*/

fetch();
