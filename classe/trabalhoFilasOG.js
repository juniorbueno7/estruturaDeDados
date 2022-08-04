//Fila com prioridade

//Jefferson Bueno
//Lucas Scaratti
//Pedro Haar

// FUNCTIONS

const prompt = require("utils/prompt")

function message(msg, timems) {
    var time = timems == undefined ? 1000 : timems
    console.log("\nMessage: ", msg)
    sleep(time)
}

function sleep(ms) {
    const date = Date.now()
    let currentDate = null
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms)
}

// CLASSE QUEUE

class Queue {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    enqueue(element) {
        this.items[this.count] = element
        this.count++
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }

        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }

        return this.items[this.lowestCount]
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.count - this.lowestCount
    }

    toString() {
        let arr = []

        for(let i = this.lowestCount; i < this.count; i++) {
            arr.push(this.items[i])
        }

        return arr.toString()
    }
}

// MAIN
let contador = 0
var normal = new Queue()
var priori = new Queue()
do {
    console.clear()
    console.log(" FILA FIFO")
    console.log("=============================\n")
    console.log(" FILA NORMAL: [" + normal.toString() + "]\n") // ENTRADA FILA NORMAL
    console.log(" FILA PRIORITARIA: [" + priori.toString() + "]\n") // ENTRADA FILA PRIORITÁRIA
    console.log("** OPERAÇÕES **")
    console.log("1 - Inserir")
    console.log("2 - Remover") 
    console.log("9 - Sair")
    var option = prompt("Opção: ", "number")

    switch(option) {
        case 0: //test mode 
            normal.enqueue(1)
            normal.enqueue(1)
            normal.enqueue(1)
            priori.enqueue(2)
            priori.enqueue(2)
            priori.enqueue(2)
            break

        case 1:
            console.log("1 - Normal")
            console.log("2 - Prioritária")
            var opcao = prompt("Deseja inserir em qual fila? ", "number")            
            switch(opcao) {
                case 1:
                    var element = prompt("Elemento: ") // ENTRADA DE ELEMENTO NORMAL.QUEUE
                    normal.enqueue(element)
                    message("Elemento inserido!")
                    break
                case 2:
                    var element = prompt("Elemento: ") // ENTRADA DE ELEMENTO PRIORI.QUEUE 
                    priori.enqueue(element)
                    message("Elemento inserido!")
                    break
                default:
                    message("Opção inválida!")
                    break
            }
            break
        case 2:
            if(priori.isEmpty()){ //Ao fim da fila de prioridade, para nao entrarmos nela novamente, atribuimos um novo valor ao contador
                contador = 3
            }
            if(contador < 2) {     // Enquanto o contador (que começa em 0) for menor que 2, remover da fila prioritaria
                var element = priori.dequeue() // Atribuindo a fila prioritária à uma variável
                if (element !== undefined) { // Se houve uma remoção da fila (verificar função dequeue)
                contador++ // Soma mais um no contador 
                message("Elemento " + element + " removido!")
                } else {
                message("Fila está vazia!")
                }
                
            }else{        
                
                var element = normal.dequeue() // Atribuindo a fila normal à uma variável
                if (element !== undefined) {  // Se houve uma remoção da fila (verificar função dequeue)
                contador = 0 // Reseta o contador a 0 para retornar a fila de prioridade 
                message("Elemento " + element + " removido!")
                } else {
                message("Fila está vazia!")
                }
                
            }
            break      
        case 9:
            console.clear()
            break
        default:
            message("Opção inválida!")

    }
} while (option != 9)