Function.prototype.inherits = function(superclass) { 
    // subclass.inherits(superclass)
    // passes in class we want to inherit from 
    // since subclass calls this inherit function, 'this' is subclass
    function Surrogate() {}
    Surrogate.prototype = superclass.prototype
    this.prototype = new Surrogate()
    this.prototype.constructor = this
}

Function.prototype.inherits = function(superclass) { 
    this.prototype = Object.create(superclass.prototype);
}

function MovingObject (objectName, color) {
    this.objectName = objectName
    this.color = color 
}

MovingObject.prototype.move = function () {
    console.log('I am moving!')
}

function Ship (shipName, capacity) {
    this.shipName = shipName
    this.capacity = capacity
}

Ship.inherits(MovingObject);

Ship.prototype.sail = function () { 
    console.log('I am sailing')
}

function Asteroid (height) {
    this.height = height 
}

Asteroid.inherits(MovingObject);

Asteroid.prototype.crash = function() { 
    console.log(`I am crashing from ${this.height} ft`)
}

const vacuumCleaner = new MovingObject('Moe', 'pink')
const voyager = new Ship('LaVinia', 5)
const astor = new Asteroid(5000)

voyager.sail()
voyager.move()
// vacuumCleaner.sail()
astor.crash()