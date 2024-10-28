
// console.log("hello cart");

const data = localStorage.getItem("cart");
const getItem = JSON.parse(data);
console.log(getItem);

let output = document.querySelector(".output");


getItem.map((item) => {
    // console.log(`${item.model} ${item.brand}`)
    output.innerHTML += `
    <div id="card1">
      <div class="card3-image">
      <img src="${item.image}"/>
      </div>
    <h2>Name : ${item.brand}</h2>
    <h2>Price: ${item.price}</h2>


    </div>
    `
})
