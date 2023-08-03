let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "juff",
    name: "Casual Shirt",
    price: 450,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "image/img-1.jpg",
  },
  {
    id: "juffy",
    name: "Office Shirt",
    price: 1000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "/image/img-2.jpg",
  },
  {
    id: "juffer",
    name: "T Shirt",
    price: 250,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "/image/img-3.jpg",
  },
  {
    id: "juffii",
    name: "Mens Suit",
    price: 3000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "/image/img-4.jpg",
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      // for restructuring to avoid "x.id/name/price/desc/img"

      let { id, name, price, desc, img } = x;
      return `
    <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="casual shirt" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="button">
              <i class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">0</div>
              <i class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join(""));
};
generateShop();
