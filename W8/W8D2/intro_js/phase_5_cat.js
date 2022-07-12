function Cat(name, owner) { 
    this.name = name 
    this.owner = owner 
}

// Cat.prototype.cuteStatement = function() { 
//     console.log(`${this.owner} loves ${this.name}`)
// }

const cat1 = new Cat("Deb", "Deborah")

Cat.prototype.cuteStatement = function() { 
    console.log(`Everyone loves ${this.name}`)
}

Cat.prototype.meow = function() { 
    console.log('Meow')
}


// cat1.cuteStatement()
cat1.meow()