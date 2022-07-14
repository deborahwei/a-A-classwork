const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) { 
    if (numsLeft === 0) {
        reader.close();
        completionCallback(sum);
    }
    if (numsLeft > 0) { 
        reader.question('Give a number: ', function(answer) {
            num = parseInt(answer);
            sum += num;
            numsLeft -= 1;
            console.log(sum);
            addNumbers(sum, numsLeft, completionCallback);
        });
    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));