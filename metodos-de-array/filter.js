// O método Filter cria um novo array com todos os elementos que passaram na condição.

const words = ['Javascript', 'HTML', 'CSS', 'Web'];

const result = words.filter((word) => word.length > 3);

// No exemplo acima nomeamos um array no plural chamado de words e abaixo eu nomeio o novo nome do array como word que é apenas um padrão para identificar melhor o array que eu to setando antes.

// Então o resultado me trás apenas as 2 primeiras palavras pq todas as palavras que tem mais de 3 caracteres.

const products = [
  { description: 'Teclado', price: 150, promotion: true },
  { description: 'Mouse', price: 70, promotion: false },
  { description: 'Monitor', price: 900, promotion: true },
];

const promotion = products.filter((product) => product.promotion === true);

// Nesse código acima vai me trazer apenas os produtos que tem o promotion e ele for true.
