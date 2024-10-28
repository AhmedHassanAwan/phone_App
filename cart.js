
// console.log("hello cart");

const data = localStorage.getItem("cart");
const getItem = JSON.parse(data);
console.log(getItem);

const  div = document.querySelector("#output");


getItem.map((item) => {
    // console.log(`${item.model} ${item.brand}`)
    div.innerHTML += `
    <div id="card1">
    <h1>Name : ${item.brand}</h1>
    <h1>Name : ${item.price}</h1>


    </div>
    `
})
