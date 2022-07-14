var a=require("readline-sync")
var i=a.question("enter the number")
a=i
sum=0
while (i>0){
    sum=sum+(i%10)*(i*10)*(i*10)*(1*10)
    i=Math.floor (i/10)
}
if (a==sum){
    console.log("amstrong no")
}
else{
    console.log("not amstrong")
}