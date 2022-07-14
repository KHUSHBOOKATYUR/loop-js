var a=require("readline-sync")
var num=a.questionInt("enter the number")
var num1=a.questionInt("enter the number")

while (num<=num1){
    i=1
    while (i<=10){
        console.log(num*i)
        i++
    }
    console.log()
    num=num+1
}