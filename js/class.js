console.clear();

class Transportas {
    constructor(color, vin, kw) {
        this.color = color;
        this.vin = vin;
        this.kw = kw;
        this.wheels = false;
    }

}

class Automobilis extends Transportas {
    constructor(color, vin, kw) {
        super(color, vin, kw);
        this.wheels = 4;
    }

}

class Motociklas extends Transportas {
    constructor(color, vin, kw) {
        super(color, vin, kw);
        this.wheels = 2;
    }

}

const nezinomas = new Transportas('nezinoma', '123xxx123', 1000);
const honda = new Automobilis('juoda', 'SJ1234567890', 103);
const triumph = new Motociklas('juodas', 'SJ0987654321', 63);

console.log(nezinomas);
console.log(honda);
console.log(triumph);