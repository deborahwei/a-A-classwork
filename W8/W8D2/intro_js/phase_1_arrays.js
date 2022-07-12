Array.prototype.uniq = function(){ 
    const newArr = [] 
    for(let i = 0; i < this.length; i++) {
        if(newArr.includes(this[i])){
            continue;
        }
        else {
            newArr.push(this[i])
        }
    }
    return newArr
}

// console.log([1,2,2,3,3,3].uniq())

Array.prototype.twoSum = function() {
    const newArr = [];
    for(let i = 0; i < this.length-1; i++) {
        for(let j = i + 1; j < this.length; j++){
            if (this[i] + this[j] === 0){
                newArr.push([i,j])
            }
        }
    }
    return newArr;
}

Array.prototype.transpose = function() { 
    const newArr = [];
    for(let i = 0; i < this[0].length; i++) {
        const row = [];
        for(let j = 0; j < this.length; j++) {
            row.push(this[j][i]);
        }  
        newArr.push(row)
    }
    return newArr
}

console.log([[1,2],[3,4]].transpose())