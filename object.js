/*object*/
var storeManager ={}
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmart =50;
storeManager.health = 30;
storeManager.specialAbility = "finding business opportunities";
storeManager.greeting = "Let's make some money";
storeManager.nextachivement = "open a new store";
console.log(storeManager);

var assistantmanager ={
    movement:3,
    socialSkills:30,
    streetSmart:30,
    health:40
}
assistantmanager.nextachivement="get upgrading my self";
console.log(assistantmanager);

/*array are object
push()->add of new item an array and
pop()->remove the last from an array*/
var fruit =[];
fruit.push("apple");
fruit.push("grape");
fruit.push("orange");
console.log(fruit);
fruit.pop();
console.log(fruit);

function arr_bulid(id,name,number){
    var arr =[];
    arr.push(id);
    arr.push(name);
    arr.push(number);
    console.log(arr);
}
arr_bulid(8,"dhinesh",9344898573);

/*math object
PI number->Math.PI
Euler constant->Math.E
natural logarithmof 2->Math.LN2*/
console.log(Math.PI+" "+Math.E);

/*Arthmetic and calculus*/
console.log(Math.pow(2,3))/*power of*/
console.log(Math.sqrt(25))/*square root*/
console.log(Math.cbrt(8))/*cube root*/
console.log(Math.max(2,10))
console.log(Math.min(2,10))
console.log(Math.sin(90))
console.log("__________________")
/*Math random */
Math.random();
var decimal = Math.random();
console.log(decimal);
console.log(decimal*10);

/*Ceil method*/
var round = Math.ceil(decimal);
console.log(round);