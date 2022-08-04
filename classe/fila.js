const prompt = require ("utils/prompt")

//Queue
class Queue {
    constructor(){
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    enqueue(element) { 
        this.items[this.count] = element // acessa o items, acessa o count, e bota o elemento no indice certo, referenciado pelo count
        this.count++ //acrescenta count para o proximo elemento entrar com o indice certo
    }

    dequeue() { //retirar elemento
        if (this.isEmpty()) {
            return undefined
        }

        const result = this.items[this.lowestCount] // acessa o items, e referenciado pelo lowest count, sabe qual elemento tirar
        delete this.items[this.lowestCount] // deletando 
        this.lowestCount++ //acrescenta no lowest para remover o proximo elemento corretamente
        return result
    }

    peek() { //so para mostrar o proximo a ser removido 
        if (this.isEmpty()) {
            return undefined
        }

        return this.items[this.lowestCount]
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {  //tamanho é o proximo a entrar - o proximo a sair 
        return this.count - this.lowestCount
    }

    toString() {
        let arr = []

        for (let i = this.lowestCount; i < this.count; i++) {
            arr.push(this.items[i])
        }

        return arr.toString()
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

//MAINS
var queue = new Queue()

//Menu
do {
    console.clear()
    console.log("    FILA FIFO")
    console.log("====================\n")
    console.log(" FILA: [" + queue.toString() + "]\n")  
    console.log("** OPERAÇÕES **")
    console.log("0 - TESTEMODE")
    console.log("1 - Inserir")
    console.log("2 - Remover")
    console.log("5 - Tamanho")
    console.log("7 - Limpar")
    console.log("9 - Sair")
    var option = prompt ("Opção: ", "number")

    switch(option) {

        case 0: //test mode
            queue.enqueue(1)  
            queue.enqueue(2)
            queue.enqueue(3)
            queue.enqueue(4)
            //wait()
            //process.exit()
            break

        case 1:
            var element = prompt ("Elemento: ") //armazzenando na variavel element com entrada do teclado (prompt)
            queue.enqueue(element) // passando local (queue) e chamando função, passando parâmetro
            message ("Eleento inserido!")
            break
        
        case 2:
            var element = queue.dequeue() // armazenando na variavel element a função de remoção (sempere o menor indice da fila)
            if (element !== undefined){  // coferindo se tem elementos na fila
                message ("Elemento " + element + " removido!") 
            } else {
                message ("Fila está vazia!")
            }
            break

        case 5:
            message ("Existem " + queue.size() + " elementos") // tamanho da fila 
            break

        case 7:
            queue = new Queue() // nova fila
            break

        case 8:
            queue.peek()
            console.log("testando o peek:", queue.peek())
            break

        case 9:
            console.clear()
            break
        default:
            message ("opção inválida!")
    }
} while (option != 9)

