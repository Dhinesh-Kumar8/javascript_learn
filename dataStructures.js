/*object,array,maps,sets*/

/*object*/
const car = {
    brand: 'Toyota',
    color: 'Red',

    engineOn: function() {
        console.log('Engine is on');
    }
}
console.log(car.engineOn())

/*arrays*/
const grades = [75,95,90,85,80,85];
let gradesSum = 0;

for (i=0; i<grades.length; i++) {
    gradesSum += grades[i]
}
console.log(gradesSum / grades.length)
/*maps*/
/*key-value-> hash function -> hash table*/

/*sets*/
const house1 = 'red'
const house2 = 'blue'
const house3 = 'green'

const houses = new Set()
houses.add(house1).add(house2).add(house3)
console.log(houses);

/forEach/
const fruits = ['apple', 'banana', 'cherry',''];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

/filter/
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return console.log(num >= 20);
})

/*map*/
nums.map( function(num) {
    return console.log(num / 10)
})

/*Other data structures in JavaScript
Queues

Linked lists (singly-linked and doubly-linked)

Trees

Graphs*/

/*const [first, second, third, ...secondVisit] =top7;
console.log(top7)*/

function addtax(taxrate, ...itemsbought) {
    return console.log(itemsbought.map(item => taxrate * item))
}

let shoppingCart = addtax(1.1,46,89,35,79);

/*new*/
const repetationFruit = ['apple','pear','apple','pear','plum','apple'];
const uniqueFruit = [...new Set(repetationFruit)];
console.log(uniqueFruit);

const fruit = ['apple', 'banana', 'cherry'];
const berry = ['blackberry', 'blueberry', 'blackcurrant'];
const akfruit = [...fruit, ...berry];
console.log(akfruit);