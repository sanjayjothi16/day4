// print odd numberss in an array
// IIFE 
(function PrintOdd(arr){
    for (let i=0;i<arr.length;i++){
    if (arr[i]%2 !=0){
    console.log(arr[i]);
    }
    }
}) ([1,2,3,4,5,6,7,8,9]);
 // anaoymous function
  let printoddnum = function(arr){
    for (let i=0;i<arr.length;i++){
        if (arr[i]%2 !=0){
        console.log(arr[i]);
        }
    }
  }
  printoddnum([1,2,3,4,5,6,7,8,9]);
// arrow function
let printoddarrow = (arr) =>{
    for (let i=0;i<arr.length;i++){
        if (arr[i]%2 !=0){
        console.log(arr[i]);
        }
    }
}
printoddarrow([1,2,3,4,5,6,7,8,9]);
// convert all the strings to title caps in a string array 
// IIFE 
(function caps(letter){

    for (let i=0;i<letter.length;i++){
        let b=letter[i].toUpperCase();
        console.log(b);
    }
})(["sanjai"])
// anonymous 
let capletter = function(letter){
    for (let i=0;i<letter.length;i++){
        let b=letter[i].toUpperCase();
        console.log(b);
    }
}
capletter(["sanjai"]);
// arrow function
let capss = (letter)=>{
    for (let i=0;i<letter.length;i++){
        let b=letter[i].toUpperCase();
        console.log(b);
    }

}
capss(["sanjai"]);
 
//sum of all numbers in an array
//IIFE
(function sumnum(suma){

    let sum=0
        for (let i=0;i<suma.length;i++){
        let b  =(suma[i]);
       
        sum += b;
    }
    console.log(sum);
}
)([1,2,3,4,5]);
// anonymous function
let sumnumb = function(suma){
    let sum=0
    for (let i=0;i<suma.length;i++){
    let b  =(suma[i]);
   
    sum += b;
}
console.log(sum);
    
};
sumnumb([1,2,3,4,5]);
// arrow function
let sumed =(suma)=>{
    let sum=0
    for (let i=0;i<suma.length;i++){
    let b  =(suma[i]);
   
    sum += b;
}
console.log(sum);
};
sumed([1,2,3,4,5]);
// return all the prime numbers in an array 
//IIFM 
(function(arr) {
    function prime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 0; i < arr.length; i++) {
        if (prime(arr[i])) {
            console.log(arr[i]);
        }
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// anonymous function
let primenum =function(arr){
    function prime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 0; i < arr.length; i++) {
        if (prime(arr[i])) {
            console.log(arr[i]);
        }
    }
};
primenum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// arrow function
let primeee =(arr)=>{
    function prime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 0; i < arr.length; i++) {
        if (prime(arr[i])) {
            console.log(arr[i]);
        }
    }
};
primeee([1,2,3,4,5,6,7,8,9,10]);
// return all the palindroms in an array
// IIFE 
let palindromes = (function(arr) {
    function isPalindrome(str) {
        const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    return arr.filter(item => isPalindrome(item));
})(["mam","sir","malayalam"]);

console.log("Palindromes:", palindromes);
// anonymous function
let palindrom =function(arr){
    function isPalindrome(str) {
        const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    return arr.filter(item => isPalindrome(item));
};

console.log("Palindromes:", palindromes);
;
palindrom(["mam","sir","malayalam"]);
// arrow function
let palin =(arr)=>{
    function isPalindrome(str) {
        const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    return arr.filter(item => isPalindrome(item));
};

console.log("Palindromes:", palin(["level","other","dad","mom"]));
// return medium of two sorted arrays of the same size
//IIFE
(function(a,b) {
    function median (){
    let c = [...a, ...b].sort((a, b) => a - b);

    let length = c.length;
    let middle = Math.floor(length / 2);

    if (length % 2 === 0)
    {
        console.log((c[middle - 1] + c[middle]) / 2);
    } 
    else 
    {
        console.log([middle]);
    }
}
median();
    })([2,3,4],[5,6,7])
// arrow function 
let med =(a,b) => {
    let c = [...a, ...b].sort((a, b) => a - b);

    let length = c.length;
    let middle = Math.floor(length / 2);

    if (length % 2 === 0)
    {
        console.log((c[middle - 1] + c[middle]) / 2);
    } 
    else 
    {
        console.log([middle]);
    }
} 
med([2,3,4],[5,6,7]);
// IIFE 
(function(arr){
    function duplecate(){
        let a=[...new Set(arr)];
        console.log(a);
    }
    duplecate();
})([1,2,3,4,4,5]);
// anonymous functions 
let dup = function (arr){
    let a=[...new Set(arr)];
    console.log(a);

};
dup([1,2,3,4,4,5,6]);
// rotate an array by k times
// IIFE 
(function (arr,k){{
    let rotate =[...arr.slice(k), ...arr.slice(0,k)];
    console.log(rotate);
};
})([1,2,3,4,5],2);
// anonymous function
let rotater=function(arr,k){
    let rotate =[...arr.slice(k), ...arr.slice(0,k)];
    console.log(rotate);
};
rotater([1,2,3,4,5],3);