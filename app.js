
const mobilePhones = [
    {
      "id": 1,
      "brand": "Apple",
      "model": "iPhone 14",
      "ram": "6GB",
      "rom": "128GB",
      "price": 799,
      image : "./image/iphone.jpg"
    },
    {
      "id": 2,
      "brand": "Samsung",
      "model": "Galaxy S22",
      "ram": "8GB",
      "rom": "256GB",
      "price": 899,
      image : "./image/image2.webp"
    },
    {
      "id": 3,
      "brand": "Google",
      "model": "Pixel 7",
      "ram": "8GB",
      "rom": "128GB",
      "price": 699,
      image : "./image/image3.webp"
    },
    {
      "id": 4,
      "brand": "OnePlus",
      "model": "10 Pro",
      "ram": "12GB",
      "rom": "256GB",
      "price": 799,
      image : "./image/image4.png"
    },
    {
      "id": 5,
      "brand": "Xiaomi",
      "model": "Redmi Note 12",
      "ram": "4GB",
      "rom": "128GB",
      "price": 299,
      image : "./image/image5.webp"
    },
    {
      "id": 6,
      "brand": "Oppo",
      "model": "Reno 8",
      "ram": "8GB",
      "rom": "256GB",
      "price": 499,
      image : "./image/image6.webp"
    },
    {
      "id": 7,
      "brand": "Vivo",
      "model": "V23",
      "ram": "8GB",
      "rom": "256GB",
      "price": 399,
      image : "./image/image7.png"
    },
    {
      "id": 8,
      "brand": "Huawei",
      "model": "P40",
      "ram": "8GB",
      "rom": "256GB",
      "price": 699,
      image : "./image/image 8.jpg"
    },
    {
      "id": 9,
      "brand": "Asus",
      "model": "Zenfone 9",
      "ram": "8GB",
      "rom": "128GB",
      "price": 599,
      image : "./image/image 9.png"
    },
    {
      "id": 10,
      "brand": "Motorola",
      "model": "Moto G82",
      "ram": "4GB",
      "rom": "128GB",
      "price": 299,
      image : "./image/image10.jpg"
    },
    {
        "id": 11,
        "brand": "Nokia",
        "model": "G60",
        "ram": "4GB",
        "rom": "128GB",
        "price": 399,
        image : "./image/image11.jfif"
      },
      {
        "id": 12,
        "brand": "Sony",
        "model": "Xperia 1 IV",
        "ram": "12GB",
        "rom": "256GB",
        "price": 1099,
        image : "./image/image12.jfif"
      },
      {
        "id": 13,
        "brand": "LG",
        "model": "G8X",
        "ram": "6GB",
        "rom": "128GB",
        "price": 699,
        image : "./image/image13.jpg"
      },
      {
        "id": 14,
        "brand": "HTC",
        "model": "U20",
        "ram": "8GB",
        "rom": "128GB",
        "price": 599,
        image : "./image/image14.jpg"
      },
      {
        "id": 15,
        "brand": "ZTE",
        "model": "Axon 40",
        "ram": "8GB",
        "rom": "256GB",
        "price": 499,
        image : "./image/image15.jpg"
      }
];

const div = document.querySelector("#container");

let cartItems;
const checkDataFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
if (checkDataFromLocalStorage === null) {
cartItems = [];
} else {
cartItems = [...checkDataFromLocalStorage];
}

console.log( cartItems);



mobilePhones.map((item, index) => {
    div.innerHTML += `
      <div class="card">
      <div class="card-image">
      <img src="${item.image}" />
      </div>
      <div class="content">
      <h2>${item.brand} ${item.model}</h2>
      <p>Storage: ${item.ram} / ${item.rom}</p>
      <p>price $${item.price}</p>
      <button id="addtocard" onclick="addToCart(${index})">Add to Cart</button>
      </div>
      </div>
      `;
  });




  const cartitem = []

  function addToCart(index) {
    const check = cartitem.indexOf(mobilePhones[index]);
    if(check === -1) {
        mobilePhones[index].quantity = 1
        cartitem.push(mobilePhones[index]);
    } else{
        cartitem[check].quantity += 1
    }
    console.log(cartitem)


    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
  }

  function checkout() {
    const arrintostr = JSON.stringify(cartitem)
    localStorage.setItem("cart",arrintostr)

    window.location = "cart.html"
  }