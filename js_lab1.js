function sum(fNumber, sNumber){
    return fNumber+sNumber;
}

console.log(sum(2,3));

let fArray = [5, 7, 1];
let sumA = 0;

function sumArray(fArray){
    fArray.forEach(item =>
    { sumA = sumA + item;
    });
    return sumA;
}

console.log(sumArray(fArray));
