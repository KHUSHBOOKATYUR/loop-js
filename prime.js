var a=require("readline-sync")
var num=a.question("enter the number")
i=0
count=1
while (i<=num){
    if (num%i==0){
        count+=1
    }
    i++
}
if (count==2){
    console.log(num,"it is prime number")
}else{
    console.log(num,"not prime number")
}
