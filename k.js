// {/* <script>/ */}
 
// // {/* /* // Javascript program to evaluate value of a postfix expression */} */
 
// // /* // Method to evaluate value of a postfix expression */
// function evaluatePostfix(exp)
// {
//     //create a stack
//         let stack=[];
          
//         // Scan all characters one by one
//         for(let i=0;i<exp.length;i++)
//         {
//             let c=exp[i];
              
//             // If the scanned character is an operand (number here),
//             // push it to the stack.
//             if(! isNaN( parseInt(c) )){
//             stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
//             }
              
//             //  If the scanned character is an operator, pp two
//             // elements from stack apply the operator
//             else
//             {
//                 let val1 = stack.pop();
//                 let val2 = stack.pop();
                  
//                 switch(c)
//                 {
//                     case '+':
//                     stack.push(val2+val1);
//                     break;
                      
//                     case '-':
//                     stack.push(val2- val1);
//                     break;
                      
//                     case '/':
//                     stack.push(val2/val1);
//                     break;
                      
//                     case '*':
//                     stack.push(val2*val1);
//                     break;
//                 }
//             }
//         }
//       return stack.pop();  
// }
 
// // Driver program to test above functions
// let exp="231*+9-";
// console.log("postfix evaluation: "+evaluatePostfix(exp));




// var a=require("readline-sync")
// const number = a.questionInt("Enter a positive number: ");
// let isPrime = true;
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }


function isPrime(num) {
    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }
console.log(isPrime(67));