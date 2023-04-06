const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()  //evite um comportamento padrão

     criaTarefa(evento.target.elements['nome'].value,
     evento.target.elements['prioridade'].value)
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


    // Buscando a lista do html e adicionando o novoItem na lista
    
    lista.appendChild(novoItem)


    
}