/*throw
try
catch*/
try {
    console.log(a+b)
} catch (err) {
    console.log(err)
    console.log("there was an error")
    console.log("the error was saved in the error")
}
console.log('This line now runs')

try {
    throw new ReferenceError();
} catch (err) {
    console.log(err)
    console.log("reference error")
}
console.log('This line now runs')
/*
ReferenceError
SyntaxError
TypeError
RangeError
AggregateError
Error
URIError*/