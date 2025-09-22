function ofAge(age){
    if (age >= 18) {
        console.log("You are allowed to vote")
    }
    else {
        console.log("You can not vote yet")
    }
}

ofAge(24)
ofAge(12)

let array = [3, 5, 8, 1, 0, 2, 3, 7];

function isEven(num) {
  return num % 2 === 0;
}

console.log(array.filter(isEven))

