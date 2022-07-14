const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback) {
    outerBubbleSortLoop(true)
    function outerBubbleSortLoop(madeAnySwaps) { 
        if (madeAnySwaps === true) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
        } 
        else { 
            sortCompletionCallback(arr)
        }
    }
}

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} > ${el2}? `, function(answer){
        if (answer == 'yes') {
            callback(true)
        }
        else { 
            callback(false)
        }
    })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i == (arr.length - 1)) {
        outerBubbleSortLoop(madeAnySwaps);
    }
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
            if (isGreaterThan) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                madeAnySwaps = true 
            }
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
        })        
    }
}

absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
  });