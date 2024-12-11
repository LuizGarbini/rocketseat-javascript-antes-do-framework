// Aqui no caso o 1 e o 4 ele está executando de forma síncrona por isso eles são os primeiros a aparecerem
console.log(1);

// Aqui no caso Microtasks tem prioridade maior do que os temporizadores como o setTimeout() e promisses().
queueMicrotask(() => {
  console.log(2);
});

// Independente do tempo do setTimeout() ele vai rodar após as promisses e todo o resto porquê ele é uma macroTask que tem a prioridade menor.
setTimeout(() => {
  console.log(3);
}),
  1000;

console.log(4);

// Quando a promisse é resolvida ela entra na call-stack como uma microtask.
Promise.resolve(true).then(() => {
  console.log(5);
});
