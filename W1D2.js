const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Enter operator ( +, -, * or / ): ", (operator) => {
  rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      if (operator === "+") {
        result = a + b;
      } else if (operator === "-") {
        result = a - b;
      } else if (operator === "*") {
        result = a * b;
      } else if (operator === "/") {
        if (b !== 0) {
          result = a / b;
        } else {
          console.log("Error: Division by zero");
        }
      } else {
        console.log("Invalid operator");
      }

      if (result !== undefined) {
        console.log(`The solution is ${result}`);
      }

      rl.close();
    });
  });
});
