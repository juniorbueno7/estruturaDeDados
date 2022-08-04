//Organizar uma matriz de dados usando o BUBBLE SORT

var matriz =[
            [56, "Jair"],       //indice 0
            [109, "Valdir"],    //indice 1
            [77, "Bia"],         //indice 2
            [66, "Ana"],         //indice 3
            [71, "Manoel"],     //indice 4
            [20, "Carla"],      //indice 5
            [15, "Carlos"]      //indice 6
]

//console.log("", matriz[0])

function bubbleSort(x, field)
{
    for(var n = 1; n <= 7; n++){
        for(var i = 0; i <= 5; i++){
            if(matriz[i][field] > matriz[i+1][field]){
                var aux = matriz[i]
                matriz[i] = matriz[i+1]
                matriz[i+1] = aux
            }
        }
    }
}

const ID = 0
const NOME = 1

bubbleSort(matriz, ID)

console.log("Matriz Ordenada ID: ", matriz)

bubbleSort(matriz, NOME)

console.log("Matriz Ordenada Alfabetica: ", matriz)