
function sumArray( numbers ){
    return numbers.reduce((runningSum, currentValue) => runningSum + currentValue);
}

function fitWithinVal( numbers, threshold ){
    // Create a total with starting value 
    var total = 0;
    // Create an output list
    var output = [];
    // Get each number from start to end
    numbers.forEach((currentNumber) => {
        // if the sum of the total & the current number <= threshold
        if (total + currentNumber <= threshold) {
            // add the current number to the total
            total += currentNumber;
            // add the current number to the output
            output.push(currentNumber);
        }
    });
    
    // Return the output 
    return output;
}

function getAllNamesShorterThan( namesArray, n ){
    const findPassingNames = (output, name) => name.length < n ? output.concat([name]) : output;
    return namesArray.reduce(findPassingNames, initialValue=[]);
}

function makeLabel( person ){
    var address = person['home address'];

    return `${person.greeting} ${person.givenName} ${person.familyName}
${address.streetNumber} ${address.streetName}
${address.city}, ${address.state} ${address.zip}`;
}