function foo(a, b) {
  // Type checking to ensure both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input type";
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(1, "2")); // Invalid input type
console.log(foo([1], 2)); // Invalid input type

//Alternative Solution using helper functions
function addNumbers(a,b){
    if(typeof a !== 'number' || typeof b !== 'number') return NaN;
    return a+b;
}

function addSafe(a,b){
    if(Array.isArray(a)) a = a.reduce((a,b)=>a+b,0);
    if(Array.isArray(b)) b = b.reduce((a,b)=>a+b,0);
    return addNumbers(a,b);
}
console.log(addSafe(1,2)); //3
console.log(addSafe([1,2],3)); //6
console.log(addSafe(1,[2,3])); //6