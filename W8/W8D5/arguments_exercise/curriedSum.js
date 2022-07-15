function curriedSum(numArgs){
    let numbers = [];
    function _curriedSum(num){
        numbers.push(num)

        if(numbers.length === numArgs){
            let sum = 0
            numbers.forEach((num) => { 
                sum += num 
            })
            console.log(sum)
        }
        else{
            return _curriedSum;
        }
    
    }
    return _curriedSum
}

// const sum = curriedSum(4);
// sum(5)(30)(20)(1); // => 56


Function.prototype.curry = function (numArgs) {
    let numArr = [];
    let that = this;

    function func(num) {    
        numArr.push(num)

        if(numArr.length === numArgs){
            that.apply(numArr)
        }
        else{
            return func;
        }
    }
    return func;
};

Function.prototype.curry = function (numArgs) {
    let numArr = [];

    const func = (num) => {    
        numArr.push(num)

        if(numArr.length === numArgs){
            return this(...numArr)
        }
        else{
            return func;
        }
    }
    return func;
};

function sum() {
    return Array.from(arguments).reduce((acc, ele) => acc + ele)
}

// let a = sum.curry(3)
// console.log(a(2)(5)(6));
