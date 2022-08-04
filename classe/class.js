
//classe do aluno
//sempre a mesma classe, se fizer var junior = new Aluno () eu puxo
// a mesma classe e atribuo a uma nova variavel

//classe 
class Aluno {
    constructor (){
        this.numero = 0
        this.nome = ""
        this.a1 = 0
        this.a2 = 0
        this.af = 0 
        this.media = 0
    }
}

//instancia de Aluno 
//instanciar = fazer classe virar objeto 
var aluno = new Aluno () //instanciar = fazer classe virar objeto 
    aluno.numero = 12
    aluno.nome = "Junior"


console.log(aluno.numero)

