Array.prototype.myEach = function(func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
}



Array.prototype.myMap = function(callback) {
    const newArr = [];
    
    this.myEach(function(el) {
        newArr.push(callback(el))
    })
    return newArr  
}

function doubler(arg) { 
    return arg * 2
}

// console.log([1, 2, 3, 4].myMap(doubler))

Array.prototype.myReduce = function(func, initialValue) {
    arr = [...this]
    if(initialValue === undefined) { 
        initialValue = this[0];
        arr.shift();
    }
    let sum = initialValue;
    arr.myEach(function(el) {
        sum = func(sum, el)
    })
    return sum 
}

console.log([1, 2, 3].myReduce(function(acc, el) { return acc + el;}))