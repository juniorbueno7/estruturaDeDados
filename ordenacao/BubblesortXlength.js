 //x = [5,4,2,1,8]

 const prompt = require ('utils/prompt')

 var x = prompt ("Digite os números: ", "arrayofnumber")

 console.log("inicial",x)
 
 for (var n=1; n<=x.length; n++){
     var troca = false
     for(var i=0; i<=x.length-2; i++){
         if(x[i] > x[i+1]){
             troca = true
             var aux = x[i]
             x[i] = x[i+1]
             x[i+1] = aux
           
             console.log("final",x)
         }
     }  //if (!troca) break
 }