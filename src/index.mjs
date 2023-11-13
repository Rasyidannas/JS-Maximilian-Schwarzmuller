//this is using class
class Product {
  //field is not required if using constructor property and you can declare field/properti using this
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

class ShoppingCart {
  items = [];

  // This example of setter and getter(both will added/running when class instatiate)
  //this is using setter and for write values to propeties
  set cartItems(value) {
    this.items = value; //this will be set a field items in above
    //this for reassign totalOutput properti
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }

  //this is using getter and for read properties
  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );

    return sum;
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    //adding new propertis
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" >
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;

    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
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
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (const prod of this.products) {
      //this instantiate class ProductItem
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }

    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    //instantiate ShoppingCart class
    this.cart = new ShoppingCart(); //this.cart is for store as properti cart
    const cartEl = this.cart.render();

    //instantiate ProductList class
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  // This can access without instantiate
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart; //this.cart store as properti cart static and access cart properti in render() method
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
