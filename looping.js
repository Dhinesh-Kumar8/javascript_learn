/*looping constructing*/
for(var i =1; i<=10; i++){
    console.log(i);
}
/*for loop*/
for(var i=10; i>=1; i--){
    console.log(i);
}console.log("happy");
/*task forloop
Inside the loop, write an if-else statement, which will check the following conditions:

First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".

Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".

Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".

For all the remaining values of i, your code will console log just the value of i.

 */ 
for(var i=1; i<=10; i++){
    if(i==1){
        console.log("gold medal");
    }else if(i==2){
        console.log("silver medal");
    }else if(i==3){
        console.log("bronze medal");
    }else{
        console.log(i);
    }
}
console.log("---------")

/*while loop */
var i=0;
while(i <= 5){
    console.log(i);
    i = i+1
}
console.log("");
var counter = 5;
while(counter >1){
    console.log(counter);
    counter = counter-1;
}console.log("good luck");

/*nested loop*/
for (var i=1; i<=2; i++){

    for(var j=1; j<=5;j++){
        console.log("week "+ i +" day "+j)
    }
}

for(var year=2022; year<=2025; year++){
    console.log(year);
    for(var month = 6; month<=9;month++){
        console.log("--------",month)
    }
}
