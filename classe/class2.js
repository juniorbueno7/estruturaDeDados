
//classe do aluno
//sempre a mesma classe, se fizer var junior = new Aluno () eu puxo
// a mesma classe e atribuo a uma nova variavel

class Aluno {
    constructor (numero,nome){ // variaveis locais
        this.numero = numero //this.numero = variavel global, pertecente a classe
        this.nome = nome // = nome = variavel local, do constructor, so age dentro das chaves do constructor, significa que o que está no constructor vai ser relacionado ao this.nome
        this.a1 = 0
        this.a2 = 0
        this.af = 0 
        this.media = 0
    }
}

//instancia de Aluno 
var aluno = new Aluno (1, "Junior"); //instanciar = fazer classe virar objeto 
    aluno.a1 = 2;


console.log(aluno)

