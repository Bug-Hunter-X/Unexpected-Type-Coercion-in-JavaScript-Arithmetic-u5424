# Unexpected Type Coercion in JavaScript Arithmetic

This repository demonstrates a common, yet easily overlooked, error in JavaScript: unexpected type coercion during arithmetic operations.  JavaScript's dynamic typing system, while flexible, can lead to unexpected behavior if not handled carefully.

The `bug.js` file showcases the problem. The `foo` function attempts to add two arguments, but when one of them is an array, a `TypeError` is thrown because JavaScript cannot directly perform addition on an array and a number. 

The `bugSolution.js` file illustrates potential solutions to this problem, including explicit type checking and using helper functions for safer addition.

This is a great example of how understanding JavaScript's type system is essential for writing robust and reliable code.