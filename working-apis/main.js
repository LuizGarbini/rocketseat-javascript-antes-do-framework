// Criando um Fetch para alterar partes do objeto do json da API
fetch('http://localhost:3333/products')
  // Adicionando o Then para me retornar o valor da promisse
  .then((response) => response.json())
  // Adicionamos outro .then para que eu consiga retornar os valores do response.json acima pois como ele também é assincrono ai me traria apenas uma promisse, mas desse jeito abaixo funciona
  .then((data) => console.log(data));
