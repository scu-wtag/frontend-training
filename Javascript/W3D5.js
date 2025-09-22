async function getData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);

    const users = await response.json();

    users.forEach(user => {
      console.log(user.name);
    });
  } catch (error) {
    console.error(error.message);
  }
}

getData();



async function getData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);

        const users = await response.json();

        users.forEach(user => {
            console.log(user.name);
        });
    } catch (error) {
        console.error
    }
}