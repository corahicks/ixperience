let numA = 0; //first number
let numB = 1;//second number
let sum = 0;
let nTerm = 7;//the nth term

function fibonacciSequence(){
    console.log(numA);
    console.log(numB);
    for(let i = 0; i<= nTerm; i++){
       
        sum = numA+numB;
        numA = numB;
        numB = sum;
        console.log(sum);
    }

}
