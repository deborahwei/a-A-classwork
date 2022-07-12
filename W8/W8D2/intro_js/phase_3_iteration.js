Array.prototype.bubbleSort = function() {
    const newArr = [...this];
    let unsorted = true;
    while (unsorted) {
        unsorted = false;
        for(let i = 0; i<newArr.length-1; i++) {
            if (newArr[i] > newArr[i+1]) {
                unsorted = true;
                let temp = newArr[i];
                newArr[i] = newArr[i+1];
                newArr[i+1] = temp;
            }
        }
    }
    return newArr
}
// let a = [4,3,2,4,1]
// console.log(a.bubbleSort())
// console.log(a)

String.prototype.substrings = function() { 
    const substringsArray = [];
    for(let i = 0; i < this.length; i++){ 
        for(let j = 0; j < this.length; j++){
            if(j >= i){
                substringsArray.push(this.slice(i, j+1));
            }
        }
    }
    return substringsArray
}

// a = "abcde"
// console.log(a.substrings())

