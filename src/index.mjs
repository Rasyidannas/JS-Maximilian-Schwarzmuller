//this is using class
class Product {
  //field is not required if using constructor property
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;

  //this is a property consturctor and it will auto run when instance
  constructor(title, imageUrl, desc, price) {
    (this.title = title),
      (this.imageUrl = imageUrl),
      (this.description = desc),
      (this.price = price);
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" >
        <div class="this.productuct-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;

    return prodEl;
  }
}

class ProductList {
  products = [
    //instantiate class Product
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
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (const prod of this.products) {
      //this instantiate class ProductItem
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }

    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
