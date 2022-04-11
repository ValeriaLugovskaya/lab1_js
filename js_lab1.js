


function sum(fNumber, sNumber){
    return fNumber+sNumber;
}

const b = sum(2,3);
console.log(b);



let fArray = [5, 7, 1];
let sumA = 0;

function sumArray(fArray){
    fArray.forEach(item =>
    { sumA = sumA + item;
    });
    return sumA;
    
}

console.log(sumArray(fArray));
