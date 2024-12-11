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

// Aqui no caso passamos esse console.log para disparar essa mensagem no console para demonstrar que como passamos um Timeout de 3 segundos ele vai esperar 3 segundos para rodar a função e enquanto isso dispara o console.log
console.log('Executando função assincrona');

asyncFunction()
  // O .then() recebe o parametro response que é a reposta caso a função de tudo certo
  .then((response) => {
    console.log('Sucesso:', response);
  })
  // Aqui no catch caso de algum exception ou erro ele dispara o console.log com o erro
  .catch((error) => {
    console.log('Error:', error);
  })
  // Aqui no finally ele vai rodar independente se a função deu certo ou errado, no caso aqui finalizamos a Promisse()
  .finally(() => {
    console.log('Fim da execução');
  });
