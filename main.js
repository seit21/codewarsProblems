
    //// HIGH ORDER FUNCTION + CODE WARS PROBLEMS IN JS


// 5-Sum of (Two) Squares
//Complete the function that takes a non-negative integer, and returns a list of non-negative integer pairs whose values - when squared - sum to the given integer.

//For example, given the parameter 25, the function should return the two pairs [0, 5] and [3, 4] because 0^2 + 5^2 = 25 and 3^2 + 4^2 = 25.

//Return the pairs in ascending order, so e.g. [[0, 5], [3, 4]] not [[5, 0], [3, 4]] or [[3, 4], [0, 5]], etc.

//If the given value cannot be expressed as the sum of two squares, return an empty array.

//Note: The upper bound of the parameter value will be 2,147,483,647
// 0  -->  [ [0, 0] ]
// 1  -->  [ [0, 1] ]
// 2  -->  [ [1, 1] ]
// 3  -->  []
// 4  -->  [ [0, 2] ]
// 5  -->  [ [1, 2] ]
// 25  -->  [ [0, 5], [3, 4] ]
// 325  -->  [ [1, 18], [6, 17], [10, 15] ]

 // 1- USUL
function allSquaredPairs(num) {
  let aa= Math.sqrt(num);
  let arr= [];
  for(let i=0; i<=aa; i++){
    let kv=i*i;
    let kv2= num - kv;
    let asqrt= Math.sqrt(kv2);
    
    if(Number.isInteger(asqrt) && asqrt>=i){
      
      arr.push([i,asqrt]);
    }
  }
  return arr;
}
console.log(allSquaredPairs(325));


  //  2- usul


function allSquaredPairs1(num){
  let aa=Math.floor(Math.sqrt(num));
  let arr=[];
  for(i=0; i<=aa; i++){
    for(j=0; j<=aa; j++){
      if(Math.pow(i,2)+Math.pow(j,2)==num && i<=j){
     arr.push([i,j]);
      }
    }
  }
  return arr;
}
console.log(allSquaredPairs1(325));


//  6- Write a function called findUnique which returns the only unique number from an array.

//All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.
// Input:
//  [ 1, 8, 4, 4, 6, 1, 8 ]
//  Expected output:
//   6


function findUnique2(numbers) {
  numbers.sort();
  for (var i = 0; i < numbers.length; i += 2) {
      if(numbers[i] !== numbers[i+1]) {
          return numbers[i];
      }
  }
  return undefined;
}
console.log(findUnique2([ 1, 8, 4, 4, 6, 1, 8 ]));

// 2- usul 

function findUnique(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }

  return result;
}
console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]));

//7-Define a method/function that removes from a given array of integers all the values contained in a second array.

//Examples (input -> output):
//* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
//* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
//* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

Array.prototype.remove_ = function (integer_list, values_list) {
  let a = integer_list;
  let b = values_list;
  let newArr = [];
  for (i = 0; i < a.length; i++) {
    let mosligi = false;
    for (j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        mosligi = true;
        break;
      }
    }
    if (!mosligi) {
      newArr.push(a[i]);
    }
  }
  return newArr;
};
let result = Array.prototype.remove_([1, 2, 3, 4, 5], [2, 4]);
console.log(result);

//6-Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

//For example, take 153 (3 digits), which is narcissistic:

//1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
//and 1652 (4 digits), which isn't:

//1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

function narcissistic(value) {
  let str = `${value}`;
  let sum = 0;
  for (i = 0; i < str.length; i++) {
    let a = Math.pow(str[i], str.length);
    sum += a;
  }
  if (sum === value) {
    return true;
  } else return false;
}
console.log(narcissistic(1938));

//7-Complete the function which will return the area of a circle with the given radius.

//Returned value is expected to be accurate up to tolerance of 0.01.

//If the radius is not positive, throw Error.

//circleArea(43.2673);     // returns 5881.248  (± 0.01)
//circleArea(68);          // returns 14526.724 (± 0.01)
//circleArea(0);           // throws Error
//circleArea(-1);          // throws Error

function circleArea(radius) {
  if (radius > 0) {
    let area = Math.PI * Math.pow(radius, 2);
    let Sc = area.toFixed(3);
    return +Sc;
  } else return Nan;
}
console.log(circleArea(43.2673));



// 8-Square(n) Sum; Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

function squareSum(numbers) {
  sum = 0;
  if (numbers) {
    for (i = 0; i < numbers.length; i++) {
      sum += Math.pow(numbers[i], 2);
    }
    return sum;
  } else {
    return 0;
  }
}
console.log(squareSum([1, 2, 2]));

///   2-usul

function squareSum1(numbers) {
  let sum = 0;
  numbers.forEach(function (n) {
    sum += n * n;
  });
  return sum;
}
console.log(squareSum1([1, 2, 2]));

//7- Testing 1-2-3; Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

//Write a function which takes a list of strings and returns each line prepended by the correct number.

//The numbering starts at 1. The format is n: string. Notice the colon and space in between.

//Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number = function (array) {
  let arr = [];
  for (i = 0; i < array.length; i++) {
    let a = `${i + 1}: ${array[i]}`;
    arr.push(a);
  }
  return arr;
};

console.log(number(["a", "b", "c"]));

// 6-Find the unique number

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55//

function findUniq(arr) {
  arr.sort();

  if (arr[0] !== arr[1]) {
    return arr[0];
  } else return arr[arr.length - 1];
}
console.log(findUniq([0, 0, 0.55, 0, 0]));




//7-You are given an odd-length array of integers, in which all of them are the same, except for one single number.

//Complete the method which accepts such an array, and returns that single different number.

//The input array will always be valid! (odd-length >= 3)
//  [1, 1, 2] ==> 2
//  [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers){
  let newArr= numbers.sort();
  for( i=0; i<newArr.length; i++){
    if( newArr[0]!==newArr[1]){
      return newArr[0];
    }
    else return newArr[newArr.length-1];
  }
}
  console.log(stray([17, 17, 3, 17, 17, 17, 17]));


// 7- Largest pair sum in array
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

function largestPairSum (num){
  let newArr=num.sort((a, b) => a - b);
  let maxLength=newArr.length;
  let sum=newArr[maxLength-1]+newArr[maxLength-2];
  return sum;
}
console.log(largestPairSum([99, 2, 2, 23, 19]));



//  7-Are there doubles?

//  doubleCheck("abca")
//returns false

//  doubleCheck("aabc")
//returns true

//  doubleCheck("a 11 c d")
//returns true

//  doubleCheck("AabBcC")
//returns true

//  doubleCheck("a b  c")
//returns true


function doubleCheck(str) {
  const low = str.toLowerCase();

  for (let i = 0; i < low.length - 1; i++) {
    if (low[i] === low[i + 1]) {
      return true;
    }
  }

  return false;
}
console.log(doubleCheck("a 11 c d"));

// 6- I love big nums and I cannot lie
// Write a function that given an array of numbers >= 0, will arrange them such that they form the biggest number.
//  [1, 2, 3] --> "321" (3-2-1)
//  [3, 30, 34, 5, 9] --> "9534330" (9-5-34-3-30)



function biggest(nums) {
  if (nums.every((num) => num === 0)) {
    return "0";
  }
  let sortlangan = nums.sort((a, b) => {
    let num1 = a.toString();
    let num2 = b.toString();

    return parseInt(num2 + num1) - parseInt(num1 + num2);
  });

  return sortlangan.join("");
}
console.log(biggest([3, 30, 34, 5, 9]));
