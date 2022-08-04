const prompt = require ("utils/prompt")

var nome = prompt ("Escreva o nome:", "arrayofstr")

console.log("String:", nome)

for(var n=1; n<=nome.length; n++){
    for(var i=0; i<=nome.length-2; i++){
        if (nome[i] > nome[i+1]){
        var aux = nome[i]
        nome[i] = nome[i+1]
        nome[i+1] = aux

        }

    }
}
console.log("String:", nome)