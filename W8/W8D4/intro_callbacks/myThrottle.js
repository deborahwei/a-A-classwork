Function.prototype.myThrottle = function (interval) {
    let tooSoon = false; 
    return () => {
        if (tooSoon === true) {
            return 
        }
        else {
            tooSoon = true 
            setTimeout(function () {
                tooSoon = false;
            }, interval)
            this();   
        }
    }    
}
  
  // You can use clearInterval to stop the firing:
  
  // Using Function#myThrottle, we should be able to throttle
  // the #fire function of our neuron so that it can only fire
  // once every 500ms:

class Neuron {
    constructor() {
        this.fire = this.fire.myThrottle(500);
        this.fire()
    }

    fire() {
        console.log("Firing!");
    }
    }


const neuron = new Neuron();
      
neuron.fire = neuron.fire.myThrottle(5000);

const interval = setInterval(() => {
neuron.fire();
}, 10);


