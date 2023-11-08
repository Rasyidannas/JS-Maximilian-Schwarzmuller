//this is using class
class Product {
  //properties
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  //consturctor is auto run when instance
  constructor(title, imageUrl, desc, price) {
    (this.title = title),
      (this.imageUrl = imageUrl),
      (this.description = desc),
      (this.price = price);
  }
}

const productList = {
  products: [
    //instance class
    new Product(
      "A Pillow",
      "https://images.unsplash.com/photo-1629949009765-40fc74c9ec21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGlsbG93fGVufDB8fDB8fHww",
      "A soft pillow",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "A carpet might you like - or not.",
      89.99
    ),
  ],

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt="${prod.title}" >
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }

    renderHook.append(prodList);
  },
};

productList.render();
