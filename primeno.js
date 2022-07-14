// function isPrime(num) {
//     if (num === 2) {
//       return true;
//     } else if (num > 1) {
//       for (var i = 2; i < num; i++) {
  
//         if (num % i !== 0) {
//           return true;
//         } else if (num === i * i) {
//           return false
//         } else {
//           return false;
//         }
//       }
//     } else {
//       return false;
//     }
  
//   }
// console.log(isPrime(67));


// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if(num % i === 0) return false; 
//     return num > 1;
// }
// console.log(isPrime(90))


function surface_area_octahedron(side)
{
    return (2 * (Math.sqrt(3)) * (side*side));
}
let side = 7;
console.log("Surface area of octahedron =" +
               surface_area_octahedron(side));