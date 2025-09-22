function fetchUserData(userId, callback) {
  console.log("Fetching data for user:", userId);

  setTimeout(() => {
    const user = {
      id: userId,
      name: "Alice",
      age: 25
    };

    callback(user);
  }, 1500);
}

fetchUserData(1, function(result) {
  console.log("User data received:", result);
  console.log(`Hello ${result.name}, you are ${result.age} years old!`);
});