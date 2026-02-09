console.log("client side rendering")
document.getElementById("title").innerText = "Welcome Yash"
document.getElementById("tech").innerText = "Learning Node.js"
// client side rendering means the browser downloads a minimal html and then executes js to fetch the data and build the ui.
// how csr works step by step
// 1. browser requests the page
// 2. server sends minimal html
// 3. browser downloads js
// 4. js fetches data from api
// 5. js builds the ui
// 6. page is rendered