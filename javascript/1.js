// answer1:- Operators in JavaScript are symbols that perform operations on operands. Operands can be
// variables, values, or expressions. Operators are essential in programming because they allow us to manipulate
// data and perform calculations

// answers2: - 1.Arithmetic Operators: 
// // Multiplication (*)
// const product = 3 * 4; // product is now equal to 12
// // Division (/)
// const quotient = 12 / 3; // quotient is now equal to 4
// // Exponentiation (**)
// const power = 2 ** 3; // power is now equal to 8
// // Modulo (%)
// const remainder = 10 % 3; // remainder is now equal to 1

// Assignment Operators:

// // Assignment operator (=)
// const myVariable = 10;
// // Addition assignment operator (+=)
// myVariable += 5; // myVariable is now equal to 15
// // Subtraction assignment operator (-=)
// myVariable -= 5; // myVariable is now equal to 10
// // Multiplication assignment operator (*=)
// myVariable *= 2; // myVariable is now equal to 20

// Comparison Operators:

// // Not equal to (!=)
// const isNotEqual = 10 != 10; // isNotEqual is now equal to false
// // Greater than (>)
// const isGreaterThan = 10 > 5; // isGreaterThan is now equal to true
// // Less than (<)
// const isLessThan = 10 < 5; // isLessThan is now equal to false
// // Greater than or equal to (>=)
// const isGreaterThanOrEqual = 10 >= 10; // isGreaterThanOrEqual is now equal to
// true
// // Less than or equal to (<=)
// const isLessThanOrEqual = 10 <= 5;

// Logical Operators:

// // AND (&&)
// const isAndTrue = true && true; // isAndTrue is now equal to true
// const isAndFalse = true && false; // isAndFalse is now equal to false
// // OR (||)
// const isOrTrue = true || false; // isOrTrue is now equal to true
// const isOrFalse = false || false; // isOrFalse is now equal to false
// // NOT (!)
// const isNotTrue = !true; // isNotTrue is now equal to false
// const isNotFalse = !false; // isNotFalse is now equal to true

// answers3: 
// Unary operators and binary operators are two types of operators in JavaScript based on the number of operands they work with.

// Unary Operators:

// Unary operators operate on only one operand.
// Examples of unary operators include:
// Unary Plus (+): Converts its operand to a number.
// Unary Negation (-): Negates its operand.
// Logical Not (!): Returns false if its operand can be converted to true, and vice versa.
// Increment (++): Increases the numeric value of its operand by 1.
// Decrement (--): Decreases the numeric value of its operand by 1.
// Typeof: Returns a string indicating the type of the operand.
// Bitwise NOT (~): Inverts the bits of its operand.

// Binary Operators:

// Binary operators work with two operands.
// Examples of binary operators include:
// Arithmetic Operators: Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulus (%).
// Comparison Operators: Equal to (==), Not equal to (!=), Strict equal to (===), Strict not equal to (!==), Greater than (>), Less than (<), Greater than or equal to (>=), Less than or equal to (<=).
// Logical Operators: Logical AND (&&), Logical OR (||).
// Assignment Operators: Assign a value to a variable (e.g., =, +=, -=, *=, /=).

// Answer 4: Precedence:

// Precedence refers to the priority of operators in an expression.Operators with higher precedence are evaluated first.For example, in the expression 2 + 3 * 4, the multiplication operator(*) has higher precedence than the addition operator(+), so 3 * 4 is evaluated first.

//     It's essential to be aware of operator precedence to avoid unexpected behavior and to write expressions that produce the desired results without relying on default precedence.

// Associativity:

// Associativity determines the order in which operators of the same precedence are evaluated.It can be left - to - right or right - to - left.

//     Left - associative operators are evaluated from left to right, and right - associative operators are evaluated from right to left.

// For example, the addition operator(+) is left - associative, so in the expression 2 + 3 + 4, the leftmost + is evaluated first.

// Correctness of Expressions:

// Understanding operator precedence and associativity helps in writing expressions that produce the intended results.Without this understanding, the order of evaluation might be different from what a developer expects.
//     Readability:

// Code readability is enhanced when operators are used with an awareness of their precedence and associativity.It makes the code clearer to other developers who may read or maintain it.
//     Debugging:

// Misunderstanding operator precedence and associativity can lead to bugs that are hard to identify.Knowing the rules helps in debugging and fixing issues related to the order of operations.
// Avoiding Unnecessary Parentheses:

// Proper understanding allows developers to avoid overusing parentheses for grouping and only use them when necessary to clarify the intended order of operations.

// Answer 5: 
const principal = 1000
const rate = 5
const time = 2 // in years
const result = (principal * rate * time)/100
console.log("Simple Interest =", result)

// Answer 6:
const height = 160 // in cm
const weight = 55 // in kg
const BMI = weight/ height * height
console.log("BMI =", BMI)

// Answer 7 :

const radius = 10; // Radius of the circle
// Calculate the area of the circle: area = π * radius^2
const pi = Math.PI; // Approximate value of pi
const area = pi * Math.pow(radius, 2);
console.log("Area of the circle:", area);