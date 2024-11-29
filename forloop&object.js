const car = {
    engine: 'V8',
    steering: true,
    speed: 'slow'
}

const sportsCar = Object.create(car);
sportsCar.speed = 'fast';
console.log("the sports object:", sportsCar);

console.log('---for-in is unreliable ----');
for (prop in sportsCar) {
    console.log('😍',prop);
}

console.log('-----for--in reliable ----');
for (prop of Object.keys(sportsCar)) {
    console.log(prop +":" + sportsCar[prop]);
}