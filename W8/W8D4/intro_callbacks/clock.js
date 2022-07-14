class Clock { 
    constructor() {
        let d = new Date();
        this.hours = d.getHours();
        this.minutes = d.getMinutes();
        this.seconds = d.getSeconds();
        this.printTime();
        this._tick = this._tick.bind(this)
        setInterval(this._tick, 1000);

        
    } 

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }
        
    _tick() { 
        this.seconds += 1
        this.printTime()
    }
}

const clock = new Clock()

