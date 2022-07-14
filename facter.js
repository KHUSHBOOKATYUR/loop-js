var a=require("readline-sync")
var num=a.question("enter the number")
i=0
while (i<=num){
    if (num%i==0){
        console.log("factor no",i)
    }
    i++
}