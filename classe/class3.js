
//classe do aluno
//sempre a mesma classe, se fizer var junior = new Aluno () eu puxo
// a mesma classe e atribuo a uma nova variavel

class Aluno {
    constructor (numero,nome,){ // variaveis locais
        this.numero = numero //this.numero = variavel global, pertecente a classe
        this.nome = nome // == nome, variavel local, do constructor, so age dentro das chaves do constructor
        this.notas = new Notas ()
       
    }
}

class Notas{
    constructor(){
        this.a1 = 0
        this.a2 = 0
        this.af = null
      
    }

    media () {
        if (this.af == null){
            return this.a1 + this.a2;
        } else {
            return this.a1 < this.a2 ? this.af + this.a2 : this.a1 + this.af;
        }
    }

    resultado (){
        return this.media() >= 6 ? "Aprovado" : "Reprovado"
    }

}

//instancia de aluno 
var aluno = new Aluno (1, "Junior"); //instanciar = fazer classe virar objeto 
    aluno.notas.a1 = 3
    aluno.notas.a2 = 3


console.log("aluno:",aluno)
console.log("A1:", aluno.notas.a1)
console.log ("media", aluno.notas.media())
console.log("resultado:", aluno.notas.resultado())
