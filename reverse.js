var a=require("readline-sync")
var num=a.question("enter the number")
i=0
while (num>0){
    x=0
    x=num%10
    i=i*10+x
    num=Math.floor (num/10)
}
console.log("reverse no=",i)
num++
