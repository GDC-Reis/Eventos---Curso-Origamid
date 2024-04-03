// addEventListener
// Adiciona uma função ao elemento, esta chamada de callback,
// que será ativada assim que certo evento ocorrer neste elemento.

const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', () => {
    console.log('Clicou 1');
})

// Obs: o terceiro parâmetro é opcional.


// Callback
// É uma boa prática separar a função de callback do addEventListener, ou seja,
// declarar uma função ao invés de passar diretamente uma função anônima.

const imagem = document.querySelector('img');

function callback(){
    console.log('Clicou callback declarada fora da chamada');
}

img.addEventListener('click', callback); // 🚀
img.addEventListener('click', callback()); // undefined
img.addEventListener('click', function() {
    console.log('Clicou 2');
});
img.addEventListener('click', () => {
    console.log('Clicou 3');
});


// Event
// O primeiro parâmetro do callback é referente ao evento que ocorreu.

const imgEvent = document.querySelector('img');

function callback(event){
    console.log(event);
}

/*
    Geralmente utilizam "e" como nome do parâmetro.
*/ 

img.addEventListener('click', callback);


// Propriedades do Event

const animaisLista = document.querySelector('.animais-lista');

function executarCallBack(event){
    const currentTarget = event.currentTarget; // this
    const target = event.target; // onde o clique ocorreu
    const type = event.type; // tipo de evento
    const path = event.path; 
    console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallBack);