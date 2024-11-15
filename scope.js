/*scoping with var,let,const*/
var num1 = 10;
function score(){
    var num2 = 20;
    console.log(num2);
}
score();

/*block scope */
let color = 'red';

if(color == 'red'){
    let color = 'blue';
}