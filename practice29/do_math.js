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