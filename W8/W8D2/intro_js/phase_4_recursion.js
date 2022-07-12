function range(start,end) {
    if (start === end) {
        return [end];
    }
    return [start].concat(range(start+1,end));
}
// console.log(range(0,3))

function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0]
    }
    return arr[0] + sumRec(arr.slice(1))
}

// console.log(sumRec(a))

function exponent(base, exp) { 
    if (exp === 0) { 
        return 1
    }
    return base * exponent(base, exp - 1)
}

function exponent(base, exp) { 
    if (exp === 0) { 
        return 1
    }
    if (exp === 1) { 
        return base
    }
    if (exp % 2 === 0){
        return exponent(base, exp/2) ** 2
    }
    else {
        return base * (exponent(base, (exp - 1)/2)) ** 2
    }
 
}

// console.log(exponent(2, 3))

function fibonacci(n) { // n === 3
    if (n==1) {
        return [1];
    }
    if (n==2) {
        return [1,1];
    }
    prev = fibonacci(n-1) // prev = [1,1]
    prev1 = prev[n-2]; // prev = 1
    prev2 = prev[n-3]; // prev = 1
    return prev.concat([prev1 + prev2]);
}

// console.log(fibonacci(5))

function deepDup(arr) { 
    const newArr = []
    arr.forEach(function(el){ 
        if (Array.isArray(el)) {
            newArr.push(el)
        }
        else { 
            newArr.push(deepDup(el))
        }
    }
    )
    return newArr
}

function bsearch(arr, target) { 
    if (arr.length === 1 && arr[0] != target) { 
        return -1
    }
    let m = Math.trunc(arr.length / 2)
    if(arr[m] === target) { 
        return m;
    }
    else if( arr[m] > target) { 
        return bsearch(arr.slice(0, m), target);
    }
    else { 
        let alt = bsearch(arr.slice(m + 1, arr.length), target)
        if (alt < 0) {
            return alt;
        }
        else { 
            return 1 + alt + m;
        }
    }
}

console.log(bsearch([1, 2, 3, 4, 5], 2))

function mergeSort(arr) { 
    if (arr.length <= 1)
    return arr 
    let m = Math.trunc(arr.length / 2)
    let left = mergeSort(arr.slice(0, m))
    let right = mergeSort(arr.slice(m, arr.length))

    return helpMergeSort(left, right)
}

function helpMergeSort(left, right) { 
    let arr = [] 
    while(left.length > 0 && right.length > 0) { 
        if (left[0] > right[0]) {
            arr.push(right.shift())
        }
        else {
            arr.push(left.shift())
        }
    }

    arr = arr.concat(left)
    arr = arr.concat(right)
    return arr
}

// a = [1, 3, 5, 3, 2, 4]
// console.log(mergeSort(a))

console.log(subsets([1, 2, 3, 4]))