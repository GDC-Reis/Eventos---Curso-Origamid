
//Exercícios

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma.
// Previa o comportamento padrão desses links.

// Seleciona todos os links do site
const linksInternos = document.querySelectorAll('a[href^="#"]');

// Função Callback
function handleLink(event){
    event.preventDefault(); // Previne o comportamento padrão.

    linksInternos.forEach((link) => {   // Remove o link ativo.
        link.classList.remove('ativo');
    })

    event.currentTarget.classList.add('ativo'); // Adiciona a classe ativo ao currentTarget.
}

// Passando em casa elemento 
linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clicar mostre exatamente quais elementos estão sendo clicados.

//Seleciona todos os elementos do body
const todosElementos = document.querySelectorAll('body *');

// Função Callback 
function handleElemento(event){
    console.log(event.currentTarget); // Mostra o elemento que está sendo clicado.
}

// adiciona o evento de click para todos os elementos.
todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento)
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function handleElemento(event){
//     event.currentTarget.remove(); // Remove o elemento que esta sendo clicado.
// }


// Se o usuário clicar na tecla (t), aumento todo o texto do site.

function handleClick(event){
    if(event.key === 't'){
        //documentElemente -> fala com o html
        // classList -> fala com a lista de clase 
        // toggle -> adiciona não existir e remove se existir 
        document.documentElement.classList.toggle('textomaior');
    }
}

window.addEventListener('keydown', handleClick);