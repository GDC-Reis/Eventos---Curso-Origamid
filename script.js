// addEventListener
// Adiciona uma função ao elemento, esta chamada de callback,
// que será ativada assim que certo evento ocorrer neste elemento.

const img = document.querySelector('img');

// elemento.addEventListener(event(evento), callback(função que sera ativada), options(opcional))
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
    const currentTarget = event.currentTarget; // this -> referente ao item selecionado, no caso animaisLista
    const target = event.target; // onde o clique ocorreu
    const type = event.type; // tipo de evento
    const path = event.path; // caminho
    console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallBack);


// event.preventDefault()
// Previne o comportamento padrão do evento no browser. 
// No caso de um link externo, por exemplo, irá previnir que o link seja ativo.

const linkExterno = document.querySelector('a[href^="https"]');

function clickNoLink(event){
    event.preventDefault();
    console.log(event);
}

linkExterno.addEventListener('click', clickNoLink);


// this
// A palavra chave this é uma palavra especial de JavaScript,
// que pode fazer referência a diferentes objetos dependendo do contexto.
// No caso de eventos, ele fará referência ao elemento em que addEventListener foi adicionado.

const img2 = document.querySelector('img');

function callback(event){
    console.log(this); // retorna a imagem
    console.log(this.getAttribute('src'));
}

img.addEventListener('click', callback);

/*
    Geralmente igual ao event.currentTarget
*/


// Diferentes Eventos
// Existem diversos eventos como **click**, **scroll**, **resize**,
// **keydown(quando preciona a tecla)**, **keyup(quando solta a tecla)**, **mouseenter(qundo passa o mouse por cima)**, e mais.
// Eventos podem ser adicionados a diferentes elementos, como o **window** e **document** também.

const h1 = document.querySelector('h1');

function cb(event){
    console.log(event.type, event);
}

h1.addEventListener('click', cb);
h1.addEventListener('mouseenter', cb);

window.addEventListener('scroll', cb);
window.addEventListener('resize', cb);
window.addEventListener('keydown', cb);


// Keyboard
// Você pode adicionar atalhos para facilitar a navegação no seu site,
// através de eventos **keyboard**.

function handleKeyboard(event){
    if(event.key === 'a'){
        document.body.classList.toggle('azul');
    }else if(event.key === 'v'){
        document.body.classListl.toogle('vermelho');
    }
}

window.addEventListener('keydown', callback);

//forEach e Eventos
// O métodos **addEventListener** é adicionado á um unico elemento, então é necessário um loop de entre elementos ded uma lista, para adicionalos à cada um deles.
const imgs = document.querySelectorAll('img');

function handleImg(event){
    const src = event.currentTarget.getAttribute('src');
    console.log('SRC:', src);
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
});
