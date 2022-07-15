function sum1() { 
    let args = Array.from(arguments);  
    let sum = 0;
    args.forEach((arg)=> {
        sum += arg;
    });
    return sum
}

function sum(...args){
    let sum = 0;
    args.forEach((arg)=> {
        sum += arg;
    });
    return sum
}

// console.log(sum(1, 2, 3))

