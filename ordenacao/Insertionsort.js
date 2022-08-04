
var x = [9, 8, 5, 3, 9, 6, 7, 15, 26, -4,]

    
for (var i=1; i<=9; i++){
    var eleito = x[i]
    var j = i - 1
    while(j>=0 && x[j] > eleito){
        x[j+1] = x[j]
        j = j - 1
    }
    x[j+1] = eleito
}
console.log(x)

//melhor caso O(n-1)
//pior caso O(n²)   