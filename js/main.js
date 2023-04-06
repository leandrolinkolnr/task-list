const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = []

form.addEventListener("submit", (evento) => {
    evento.preventDefault()  //evite um comportamento padrão

    const nome = evento.target.elements['nome']
    const prioridade = evento.target.elements['prioridade']

     criaTarefa(nome.value, prioridade.value)

    nome.value = ""
    prioridade.value = ""
})

function criaTarefa(nome, prioridade){
    // Exemplo de um item no html
    // <li class="item"><strong>2</strong>English</li> 

    const novoItem = document.createElement('li')
                               // novoItem = <li>

    novoItem.classList.add("item")
                  // novoItem = <li class="Item">

    const numeroItem = document.createElement('strong')
                            // numeroItem = <strong>

                            
            // adicionou o numero prioridade ao numeroItem
    numeroItem.innerHTML = prioridade    
    
   

    //  Para colocar um elemento dentro do outro (numeroItem em novoItem),
    //     eu preciso da funcao appendChild
    novoItem.appendChild(numeroItem)

            //Adicionando o nome ao novoItem
    novoItem.innerHTML += nome


    // Pegando a lista declarada la em cima e adicionando o novoItem
    lista.appendChild(novoItem)

    const itemAtual = {
        "nome": nome,
        "prioridade": prioridade
    }

    itens.push(itemAtual)

    localStorage.setItem("item", JSON.stringify(itens))

}