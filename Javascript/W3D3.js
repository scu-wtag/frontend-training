function fetchUserDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Sophia" });
    }, 500);
  });
}

module.exports = fetchUserDataPromise; 