
var x = [6, -2, 10, 4, 1]

for(var n=1; n<=5; n++){
    for(var i=0; i<=3; i++){
        if(x[i] > x[i+1]){
           var aux = x[i]
            x[i] = x[i+1]
            x[i+1] = aux
            
            console.log(x)
        }
    }
}

console.log(x)

//melhor e pior caso O(n²)





