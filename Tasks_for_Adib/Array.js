Array.prototype.myMap = function(callback, thisArg) {
  const newArray = [];
  const length = this.length;

  for (let i = 0; i < length; i++) {
    let value = callback(this[i], i, this);
    newArray.push(value);
  }

  return newArray;
};

const arr = [1, 2, 3, 7, 3, 20, 5, 22, 4];

console.log(arr.myMap(a => a * 2).join(", "));

const newArray2 = [];

arr.forEach((num) => {
  let newnum = num * 9;   
  newArray2.push(newnum);
});

console.log(newArray2.join(", "))

const evenNumbers = newArray2.filter(num => num % 2 === 0);

console.log(evenNumbers.join(", "));