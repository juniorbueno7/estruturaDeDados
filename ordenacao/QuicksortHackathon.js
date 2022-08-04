// Persons: tabela de pessoas
// Cada elemento refere-se a um registro na tabela
// cada registro Ã© um objeto com os seguintes dados: id, nome, idade

// Modulo do teclado
const prompt = require("utils/prompt")

// Banco de Dados
var persons =[
    [99, "Isaac Newton", 28],
    [80, "Friedrich Gauss", 33],
    [55, "Marie Curie", 29],
    [32, "Hedy Lamarr", 23],
    [45, "Albert Einstein", 39],
    [6, "Nicolau Copernico", 30],
    [7, "Galileu Galilei", 25 ],
    [8, "Alexander Volta", 36],
    [81, "AndrÃ©-Marie AmpÃ¨re", 23],
    [10, "James Clerk Maxwell", 25],
    [14, "James Prescott Joule", 33],
    [12, "James Watt", 23],
    [13, "Archimedes de Siracusa", 39],
    [99, "Simom Ohm", 35 ]
]

// Constantes
const ID = 0 
const NOME = 1
const IDADE = 2

const inicio = 0

// Menu
console.log("Para opção crescente digite: 0")
console.log("Para opção decrescente digite: 1")
var ordem = prompt()

console.log("Digite: 0 p/ ID")
console.log("Digite: 1 p/ NOME")
console.log("Digite: 2 p/ IDADE")
var escolha = prompt()

    if(escolha==0 && ordem==0){ //id crescente
        quickSort(persons, inicio, ID, persons.length - 1)
    }else if (escolha==0 && ordem==1){ //id decrescente
        quickSort2(persons, inicio, ID, persons.length - 1)
    }else if(escolha==1 && ordem==0){//nome crescente
        quickSort(persons, inicio, NOME, persons.length - 1)
    }else if(escolha==1 && ordem==1){//nome decrescente
        quickSort2(persons, inicio, NOME, persons.length - 1)
    }else if (escolha==2 && ordem==0){//idade crescente
        quickSort(persons, inicio, IDADE, persons.length - 1)
    }else if (escolha==2 && ordem==1){//idade decrescente
        quickSort2(persons, inicio, IDADE, persons.length - 1)
    }else{
        console.log("opção invalida")
    }


    
// ALGORITMO QUICKSORT

//Função de troca dos elementos
function troca(persons, i, j){
    var aux = persons[i]
    persons[i] = persons[j]
    persons[j] = aux
}

//Função Crescente
function partition(persons, inicio, field, fim){
    var pivo = persons[fim][field]

    var i = (inicio - 1)

    for(var j = inicio; j <= fim - 1; j++){
        if(persons[j][field] < pivo){
            i++
            troca(persons, i, j)
        }
    }
    troca(persons, i+1, fim)
    return (i+1)
}

//QuickSort principal crescente
function quickSort(persons, inicio, field, fim){
    if(inicio < fim){
        var pi = partition(persons, inicio, field, fim)

        quickSort(persons, inicio, field, pi - 1)
        quickSort(persons, pi + 1, field, fim)
    }
}



//Função Decrescente
function partition2(persons, inicio, field, fim){
    var pivo = persons[fim][field]

    var i = (inicio - 1)

    for(var j = inicio; j <= fim - 1; j++){
        if(persons[j][field] > pivo){
            i++
            troca(persons, i, j)
        }
    }
    troca(persons, i+1, fim)
    return (i+1)
}

//Quicksort principal decrescente
function quickSort2(persons, inicio, field, fim){
    if(inicio < fim){
        var pi = partition2(persons, inicio, field, fim)

        quickSort2(persons, inicio, field, pi - 1)
        quickSort2(persons, pi + 1, field, fim)
    }
}


console.log("", persons)