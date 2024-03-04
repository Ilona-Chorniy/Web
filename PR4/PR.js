function MyMathPower(base, a) {
    let result = 1;
    for (let i = 0; i < a; i++) {
        result *= base;
    }
    console.log(`The ${a}th power of ${base} equals ${result}`);
}

function MyMathPowerDefault1(base = 2, a = 3) {
    MyMathPower(base, a);
}

function MyMathPowerDefault2(base = 2, a = 3) {
    MyMathPower(base, a);
}

function TestAllFunctions() {
    console.log("Testing MyMathPowerDefault1:");
    MyMathPowerDefault1(5, 2); 
    MyMathPowerDefault1(undefined, 3); 
    MyMathPowerDefault1(5); 
    MyMathPowerDefault1(); 
    
    console.log("Testing MyMathPowerDefault2:");
    MyMathPowerDefault2(3, 4); 
    MyMathPowerDefault2(undefined, 4); 
    MyMathPowerDefault2(3); 
    MyMathPowerDefault2(); 
}

TestAllFunctions();
