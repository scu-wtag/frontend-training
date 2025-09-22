const array = [4, 3.5, 6, 2, 8, 3, 1.5, 2.5]

const array2 = array.map(myFunction)


function myFunction(num) {
  return num * 2;
}

const array3 = array2.filter(otherFunction)

function otherFunction(num) {
  return num % 2 === 0; 
}

console.log("the doubled array is : ")
console.log(array2)
console.log("the even array is: ")
console.log(array3)
