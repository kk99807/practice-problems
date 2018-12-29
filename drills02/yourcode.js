

function countOccurences( wordArray, word ){
    const reducer = (counter, currentWord) => word == currentWord ? ++counter : counter;
    return wordArray.reduce(reducer, initialValue=0);
}

function wordLengths( wordArray ){
    return wordArray.map((word) => word.length);
}

function getMinMaxMean( numbersArray ){
    // Create a container to hold the output
    var output = {min: null, max: null, mean: null};
    // Create a sum variable, with starting value zero
    var sum = 0;
    // Get each number from first to last
    for (var index = 0; index < numbersArray.length; index++) {
        var currentNumber = numbersArray[index];

        // if no min in output yet, or current number is less than min
        if (output.min === null || currentNumber < output.min) {
            // min in output = current number
            output.min = currentNumber;
        }
        // if no max in output yet, or current number is greater than max
        if (output.max === null || currentNumber > output.max) {
            // max in output = current number
            output.max = currentNumber;
        }
        // add current number to sum
        sum += currentNumber;
    } // Repeat
    // Calculate mean as sum divided by number of numbers
    var mean = sum / numbersArray.length;
    // store average in output
    output.mean = mean;
    // return output
    return output;
}

function findMode( numbersArray ){
    // Create a container to hold counts per number
    var countsPerNumber = {};

    // Get each number from first to last
    for (var index = 0; index < numbersArray.length; index++) {
        var currentNumber = numbersArray[index];

        // Get current count for the current number, or zero if not previously seen
        var currentCount = countsPerNumber[currentNumber] || 0;

        // Add 1 and store back in the counts container
        countsPerNumber[currentNumber] = ++currentCount;
    } // Repeat

    // Get a list of all the counts from counts per number
    var counts = countsPerNumber.values();

    // Sort the list 
    counts.sort();

    // Store the highest value as max count
    var maxCount = counts[counts.length - 1];

    // Get each number from first to last
    for (var index = 0; index < numbersArray.length; index++) {
        var currentNumber = numbersArray[index];

        // Get count for the number
        var currentCount = countsPerNumber[currentNumber];

        // If the count = max count
        if (currentCount === maxCount) {
            // return number
            return currentNumber;
        }
    }// Repeat
}