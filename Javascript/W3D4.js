const fetchUserDataPromise = require("./W3D3.js")

async function getUserData() {
  try {
    const user = await fetchUserDataPromise()
    console.log("User (async/await):", user)
  } catch (error) {
    console.error("Error:", error)
  }
}

getUserData()