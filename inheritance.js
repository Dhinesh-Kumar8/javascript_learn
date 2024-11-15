var animal = {
    hasleg: true,
    hasTail: true,
    sense: true
}
var cat1 = Object.create(animal);
console.log("cat1: ",cat1);
console.log("cat1 has leg:",cat1.hasleg);
console.log("cat1 has Tail:",cat1.hasTail);
console.log("cat1 sense:",cat1.sense);

var cat2 = Object.create(animal);
console.log("cat2 has leg:",cat2.hasleg);

var bat1 = Object.create(animal);
bat1.hasleg = false;
bat1.hasTail=true;
bat1.sense = true;
console.log("bat1:",bat1);

class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var fail = new NoDefaultParams(1,2,3,false);
fail.calculate(); // 'The value of bool1 is incorrect'
console.log(fail.calculate());


class DefaultParams {
    constructor(num1 = 2, num2 = 3, num3 = 4, string1 = "str1", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var pass = new DefaultParams();
pass.calculate(); // 'The value of bool1 is incorrect'
console.log(pass.calculate());