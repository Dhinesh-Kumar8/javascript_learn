var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate =1.2;

function convertof(amount,rate){
    return amount*rate;
}

currencyTwo = convertof(currencyOne,exchangeRate);
console.log(currencyTwo);