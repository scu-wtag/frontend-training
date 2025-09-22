const nr1 = "fizz";
const nr2 = "buzz";
const nr3 = "fizzbuzz";



for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
    console.log(nr3)
    }
    else if (i % 3 == 0) {
        console.log(nr1)
    }
    else if (i % 5 == 0) {
        console.log(nr2)
    }
    else {
        console.log(i)
    }
}