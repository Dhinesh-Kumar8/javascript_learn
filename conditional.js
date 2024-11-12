/*if  statement*/
var r = "good";
if(r = "good"){
    console.log("ok")
}

/*if-else statement*/
var mark = 10;
if (mark >= 40){
    console.log("pass")
}
else{
    console.log("fail")
}

/*else if statement*/
var colour = "red";
if(colour == "red"){
    console.log("blood")
}
else if(colour == "green"){
    console.log("Geo")
}
else{
    console.log("peace")
}

/*switch statement*/
var place = 'four';
var place = "second"
switch(place){
    case 'first':
        console.log("great");
        break;
    case 'second':
        console.log("next stage of goal");
        break;
    case 'third':
        console.log("great work");
        break;
    default:
        console.log("no more trying")
}
/*task
Declare a variable age using the var keyword and set it to the number 10.

Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension".

Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".

Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, "type console.log" and then "You get an allowance".

Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical".
*/
var age = 55
if(age >=65){
    console.log("you get income from your pension")
}else if(age<65 && age>=18){
    console.log("Each month you get  get a salary")
}else if(age<18){
    console.log("you get an allowance")
}else{
    console.log("the value if the age variable is not numerical")
}

/*task2
On the next line, define a new variable, name it day, and set its value to "Sunday".

Start coding a switch statement, passing the day variable as the expression to evaluate.

Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.

At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.*/
var day = "sunday";
var day = "tuesday"
switch(day){
    case "monday":
        console.log("shivan");
        break;
    case "tuesday":
        console.log("muruga");
        break;
    case "wednesday":
        console.log("do something");
        break;
    case "thursday":
        console.log("guru");
        break;
    case "friday":
        console.log("amman");
        break;
    case "saturday":
        console.log("ayyppa");
        break;
    case "sunday":
        console.log("do nothing");
        break;
    default:
        console.log("enter the correct day")
}