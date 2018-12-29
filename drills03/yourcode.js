

function getPath( path ){
    console.log('Called getPath');
    return path.split('/');
}

function getPathParts( path ){
    var parts = path.split('/');
    var address = parts[2].split(':');

    return {
        protocol: parts[0].replace(':',''),
        host: address[0],
        port: parseInt(address[1]),
        path: parts.slice(3, parts.length-1).join('/'),
        file: parts[parts.length - 1]
    };
}

function getCapitalCount( wordsArray ){
    const reducer = (count, word) => word.charAt(0) == word.charAt(0).toUpperCase() ? ++count : count;
    return wordsArray.reduce(reducer, initialValue = 0);
}

function correctCalcChecker( equationsArray ){
    const calculate = (num1, num2, operator) => {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
        }
    };

    const collectCorrect = (output, equation) => calculate(equation.num1, equation.num2, equation.op) == equation.result ? 
        output.concat([equation]) : output;
    
    return equationsArray.reduce(collectCorrect, initialValue = []);
}

function doMath(){

}