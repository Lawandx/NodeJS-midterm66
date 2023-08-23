
const readline = require('readline');

const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    let fac = 1;
    for (let i = 1; i <= n; i++) {
        fac *= i;
    }
    return fac;
}

readInterface.question('Enter the desired factorial value? :', num => {
    console.log(`The factorial value is : ${factorial(num)}!`);
    readInterface.close();
});