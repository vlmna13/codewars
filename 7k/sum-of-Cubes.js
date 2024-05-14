// DESCRIPTION:
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

function sumCubes(n){
    let sum1 = 0;
      for(let i =1; i<=n; i++){
        sum1 = sum1 + Math.pow(i, 3)
      }
      return sum1
    }