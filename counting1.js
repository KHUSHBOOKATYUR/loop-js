function digitCount(num) {
    var count=0;
    while(num!=0){
        num=Math.floor(num/10);
        count++;
    }
    return count;
  }
console.log(digitCount(8367));
console.log(digitCount(563349));