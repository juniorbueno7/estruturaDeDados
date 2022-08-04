

var x = [6, -2, 10, 4, 1]

for (var i = 0; i<=3; i++){
    eleito = x[i]
    menor = x[i+1]
    pos = i+1
    for (var j=i+2; j<=4; j++){
        if (x[j] < menor){
            menor = x[j]
            pos = j
        }
    }
    if (menor < eleito){
        x[i] = x[pos]
        x[pos] = eleito
    }
}

console.log(x)

//Ambos os casos O(n²)