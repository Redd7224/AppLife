function add(num1: number, num2: number) {
    return num1 + num2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
    const result = num1 + num2;
    cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; // allows us to determine which types of functions are allowed
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
});