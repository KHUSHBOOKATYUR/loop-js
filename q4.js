a=require("readline-sync")
var num1=a.question("enter the number")
i=0
while (i<1){
    if (num1%2==0){
        console.log(num1,"even no")
    }
    else{
        console.log(num1,"odd no")
    }
    i++
}