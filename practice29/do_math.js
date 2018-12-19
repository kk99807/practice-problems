// ## do math

// Build a function, do_math, that takes in 3 parameters: num1 (number), num2 (number), and operator (string)

// - it uses the operator to determine what math to do to the numbers
// 	- if '+', it adds them
// 	- if '-', it subtracts them
// 	- if '*' or 'x' or 'X', it multiplies them
// 	- if '/', it divides them
// - if then returns the result
// - Example:
// 	- do_math(5,2,'*')
// 	- Return: 10

export const do_math = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
        case 'x':
        case 'X':
            return num1 * num2;
        case '/':
            if (num2 == 0) throw "Cannot divide by zero";
            return num1 / num2;
        default:
            throw `Unrecognized operator: ${operator}`;
    }
};