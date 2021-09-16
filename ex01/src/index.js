function main(numOne, numTwo){

    var quotient;
    if(numTwo === 0){
        quotient = 'Divide by 0! Cannot divide by zero!';
    } else {
        // Only change code below this line
        var numOne; 
        var numTwo;
        var quotient = numOne / numTwo;
        // Only change code below this line
    }

    return quotient;
}

console.log(15 / 2); // change this line
console.log(25 / 5);
console.log(420 / 10);
console.log(55 / 0);

module.exports = main;
