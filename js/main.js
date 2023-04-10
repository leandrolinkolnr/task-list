const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []


itens.forEach((elemento) => {
    criaTarefa(elemento)
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault()  //evite um comportamento padrão

    const nome = evento.target.elements['nome']
    const prioridade = evento.target.elements['prioridade']

    const itemAtual = {
        "nome": nome.value,
        "prioridade": prioridade.value
    }

    // Operador ternario: Se itens existir, ele coloca o id = id do ultimo+1
    // Se ele não existir, coloca o id do itemAtual = 0
    itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0;

    criaTarefa(itemAtual)

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    prioridade.value = ""

})

function criaTarefa(item){
    // Exemplo de um item no html
    // <li class="item"><strong>2</strong>English</li> 

    const novoItem = document.createElement("li")
                               // novoItem = <li>

    novoItem.classList.add("item")
                  // novoItem = <li class="Item">

    const numeroItem = document.createElement("strong")
                            // numeroItem = <strong>

                            
            // adicionou o numero prioridade ao numeroItem
    numeroItem.innerHTML = item.prioridade    
    
                        //
    numeroItem.dataset.id = item.id

    //  Para colocar um elemento dentro do outro (numeroItem em novoItem),
    //     eu preciso da funcao appendChild
    novoItem.appendChild(numeroItem)

            //Adicionando o nome ao novoItem
    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDelete(item.id))

    // Pegando a lista declarada la em cima e adicionando o novoItem
    lista.appendChild(novoItem)

}



function botaoDelete(id) {
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = 'X'

    elementoBotao.addEventListener("click", function() {
        deletaTarefa(this.parentNode, id)
                            //ParentNode, ele vai excluir o parente pai = tag <li>
                            // Sem isso, ele excluia apenas o botao
    })

    return elementoBotao
}




function deletaTarefa(tag, id) {
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens", JSON.stringify(itens))
}