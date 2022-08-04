
//classe do aluno
//sempre a mesma classe, se fizer var junior = new Aluno () eu puxo
// a mesma classe e atribuo a uma nova variavel

class Aluno {
    constructor (numero,nome){ // variaveis locais
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

    check(nota){
        if(nota > 5) return 5;
        if(nota < 0) return 0;
        return nota;
    }
    
    setA1 (nota){
        this.a1 = this.check(nota);
    }

    setA2 (nota){
        this.a2 = this.check(nota);
    }

    setAF (nota){
        this.af = this.check(nota);
    }

    qualMaior(){
        if (this.a1 > this.a2){
            return `A diferença de valor entra ${this.a1} e ${this.a2} é ${this.a1-this.a2}` ``
        } else if ( this.a2 > this.a1) {
            return `A diferença de valor entra ${this.a2} e ${this.a1} é ${this.a2-this.a1}`
        } else {
            return `Os valores são iguais`
        }
    }


}

//instancia de aluno 
var aluno = new Aluno (1, "Junior"); //instanciar = fazer classe virar objeto 
    aluno.notas.setA1 (7)
    aluno.notas.setA2 (5)
    aluno.notas.setAF ()
  


console.log("aluno:",aluno)
console.log("A1:", aluno.notas.a1)
console.log ("media", aluno.notas.media())
console.log("resultado:", aluno.notas.resultado())
console.log("Qual maior:", aluno.notas.qualMaior())

