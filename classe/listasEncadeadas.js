const prompt = require ("utils/prompt")


//Linkedlist
class LinkedList {
  constructor(){
    this.count = 0 
    this.head = undefined
  }
  
  //Método PUSH
  //adiciona novo elemento no final da lista
  push(element) { 
    const node = new Node(element)
    let current 

    if (this.head == null){ // se o head estiver vazio (listas sem elementos)
        this.head = node // o head aponta para o novo node, onde o elemento fica no element e o next aponta para undefined, só tem um elemento na lista, que é esse novo node 
    
    } else {                                                      
        current = this.head // HEAD apontando para um elemento já existente 
       while (current.next != null) { // enquanto tiver elemento no .next
         current = current.next // o current "caminha" até chegar no ultimo, quando o .next estiver apontado para undefined sai do loop e vai pra linha 25
       }
       current.next = node // quando a linha 23 acontece, é acrescentado o node 
    }
    this.count++ // adiciona um elemento no contador
  }

  //Método getElementAt
  //retorna o elemento através do indice                  /REVERRRRRRRRRRRRR
  getElementAt (index) {                                                                   
    if (index >= 0 && index <= this.count) {  // se o indice for válido, estiver dentre a lista..
        let node = this.head  //this head é atribuido ao node..
        for (let i = 0; i < index && node != null; i++) { //
          node = node.next
        }
        return node
    }
    return undefined
  }

  //Método indexOf                                      
  //retorna o indice através do elemento
  indexOf (element) { 
    let current = this.head // this head começa no atual
    for (let i = 0; i < this.count && current != null; i++ ) { // varrendo a lista, current != null é pra verificar se tem elemento na lista, se nao tiver retorna -1 na hora 
        if (element == current.element){  //se o element da linha 45 for igual ao do atual, retorna indice
          return i // retorna indice 
        }
        current = current.next // andando com o current para o current.next, até chegar na condição do if
    }
    return -1 
  }

  //Método removeAt
  removeAt (index) { 
    if (index >= 0 && index < this.count) { // se a lista for válida
        let current = this.head  // atribuimos o head ao current para iniciarmos 
       if (index === 0) { // se escolhermos o indice 0 para remover, o head aponta para o proximo nó, current.next
        this.head = current.next
      } else { //se o indice for qualquer OUTRO que NÃO seja 0
        let previous = this.getElementAt (index -1 ) // elegemos um previous a partir do indice de entrada
        current = previous.next // o atual vira o previous.next
        previous.next = current.next // o previous.next aponta para o c.n que é o próximo do current
      }
      this.count-- //remove um elemento do contador
      return true
    }
    return false 
  }

  //Método remove
  remove (element) {
      let index = this.indexOf(element) //atribui o indice do elemento escolhido numa variável 
      if(index != -1){  //validando o indice 
          this.removeAt(index) // mandando remover através do indice 
          return true // retorno 
      } else { //se não 
          return false //retorno
      }
  }

  //Método insert 
  insert (element, index) {
      if (index >= 0 && index <= this.count) { // validando indice
          const node = new Node(element) // pondo o elemento num novo node

          if(index == 0){ // se a posição para inserir for a 0
              const current = this.head // atribui o head ao current..
              node.next = current //o next do novo elemento vai apontar para o current
              this.head = node // e o head é apontado para o novo elemento 
          } else { // se a posição escolhida for qualquer outra que não seja 0
              const previous = this.getElementAt(index -1)  // elegendo o previous 
              const current = previous.next // elegendo o atual, a partir do previous 
              node.next = current // o novo elemento vai "empurrar" o que já estáva na posição que ele entrou ponteiro do novo elemento aponta para o atual
              previous.next = node  //o ponteiro do anterior aponta para o novo nó
          }
          this.count++ //acrescenta tamanho na lista
          return true
      }
      return false
  }

  //Métodos adicionais
  isEmpty () {
      return this.size() === 0
  }

  size () {
      return this.count
  }

  toString () {
      let arr = []
      let current = this.head

      for(let i = 0; i < this.size(); i++) {
          arr.push(current.element)
          current = current.next
      }
      return arr.toString()
  }
}

//Node
class Node {
  constructor(element) {
    this.element = element 
    this.next = undefined 
  }
}

//PREÂMBULO

//Functions
function message (msg, timems) {
  var time = timems == undefined ? 2000 : timems
  console.log("\nMessage: ", msg)
  sleep(time)
}

function sleep (ms) {
    const date = Date.now();
    let currentDate = null;
    do{
        currentDate = Date.now();
    } while (currentDate - date < ms);
}

//MAIN

var list = new LinkedList ()

//Menu
do{
    console.clear()
    console.log("  LISTA ENCADEADA SIMPLES")
    console.log("==============================\n")
    console.log(" LISTA: [" + list.toString() + "] \n")
    console.log("** OPERAÇÕES **")
    console.log("1 - Inserir")
    console.log("2 - Inserir na Posição")
    console.log("3 - Remover")
    console.log("4 - Remover na Posição")
    console.log("5 - Tamanho")
    console.log("6 - Procurar")
    console.log("7 - Apagar Lista")
    console.log("9 - Sair")
    var option = prompt ("Opção: ", "number")

    switch(option) {
      case 0: //test mode
        list.push(1)  
        list.push(2)
        list.push(3)
        list.push(4)
        //wait()
        //process.exit()
        break

      case 1:
        var element = prompt ("Elemento: ") // armazenando o elemento escolhido na var element, através do prompt, comando de entrada
        list.push(element) // chamando a função e passando o parâmetro
        message("Elemento inserido!")
        break

      case 2:
        var element = prompt ("Elemento: ") // armazenando o elemento escolhido na var element, através do prompt, comando de entrada
        var index = prompt ("Indice: ")// armazenando o indice escolhido na var index, através do prompt, comando de entrada
        if (list.insert(element, index)){ // chamando a função e passando os parâmentros
            message ("Elemento " + element + "inserido na posição" + index)
        } else {
            message("Erro ao inserir!")
        }
        break

      case 3:
        var element = prompt ("Elemento: ")// armazenando o elemento escolhido na var element, através do prompt, comando de entrada
        if (list.remove(element)){ // chamando a função e passando os parâmentros
            message ("Elemento removido!")
        } else {
            message ("Elemento inexistente")
        }
        break

      case 4:
        var index = prompt("Indice: ")// armazenando o elemento escolhido na var element, através do prompt, comando de entrada
        if (list.removeAt(index)){// chamando a função e passando os parâmentros
            message ("Elemento removido da posição" + index + "!")
        } else {
            message ("ERRO ao remover!")
        }
        break

      case 5: 
        message("Existem " + list.size() + "elementos.") // chamando a função e passando os parâmentros
        break

      case 6: 
        var element = prompt ("Procurado: ") // iden 
        var position = list.indexOf(element) // armazendno na var position o indice do elemento
        if (position != 1){ 
            message ("Elemento " + element + "encontrado na posição " + position) //mostrando a posição do element
        } else {
            message ("Elemento não encontrado!")
        }
        break

      case 7:
        list = new LinkedList()
        break

      case 9:
        console.clear()
        break
      
      default:
        message("Opção inválida!")

    }

} while (option != 9)

