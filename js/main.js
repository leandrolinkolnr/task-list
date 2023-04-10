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

     criaTarefa(nome.value, prioridade.value)

    const itemAtual = {
        "nome": nome.value,
        "prioridade": prioridade.value
    }

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
    
   

    //  Para colocar um elemento dentro do outro (numeroItem em novoItem),
    //     eu preciso da funcao appendChild
    novoItem.appendChild(numeroItem)

            //Adicionando o nome ao novoItem
    novoItem.innerHTML += item.nome


    // Pegando a lista declarada la em cima e adicionando o novoItem
    lista.appendChild(novoItem)

    

}