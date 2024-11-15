/*class*/
/*sytnax */
class Car{
    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }

    turnOn(){
        console.log("turbo is on");
    }
}
const car1 = new Car("red",120)
car1.turnOn();

let dat = new Date();
console.log(dat);