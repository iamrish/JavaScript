class ElementAttributes {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

// This class is for common pattern of creating an element, adding some components observed in most of the following classes
class Component {
  constructor(hookElementID) {
    this.hookID = hookElementID;
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) rootElement.className = cssClasses; //expected to be a string
    if (attributes && attributes.length > 0) {
      for (const attr of attributes)
        rootElement.setAttribute(attr.name, attr.value);
    }
    const hookEl = document.getElementById(this.hookID);
    hookEl.append(rootElement);
    return rootElement;
  }
}

class Product {
  constructor(...args) {
    // this.id = Math.random();
    this.title = args[0];
    this.imageUrl = args[1];
    this.description = args[2];
    this.price = args[3];
  }
}

class ProductItem extends Component {
  constructor(product, hookElementID) {
    super(hookElementID);
    this.product = product;
  }

  addToCart() {
    App.addToCart(this.product);
  }

  render() {
    const li = this.createRootElement("li", "product-item");
    li.innerHTML = `
    <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}>
        <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>Rs.${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add To Cart</button>
        </div>
    <div>
    `;
    const addToCartButton = li.querySelector("button");
    addToCartButton.addEventListener("click", this.addToCart.bind(this));
    // return li;
  }
}

class ProductList extends Component {
  constructor(hookElementID) {
    super(hookElementID);
    this.productList = [
      new Product(
        "Couch",
        "https://www.thespruce.com/thmb/aX-KHJy0u29cy9PrND5GoK_74dI=/3733x2800/smart/filters:no_upscale()/tips-for-buying-a-great-sofa-1391218-hero-49e5709562ef449b8b77492558e37201.jpg",
        "Very comfy and white",
        8000
      ),
      new Product(
        "Carpet",
        "https://images-na.ssl-images-amazon.com/images/I/81W6An71HSL._SL1500_.jpg",
        "Velvet Touch",
        5000
      ),
    ];
  }
  render() {
    this.createRootElement(
      "ul",
      "product-list",
      [new ElementAttributes("id", "prod-list")] //This helps in rendering the element then and there
    );
    for (const prod of this.productList) {
     new ProductItem(prod, "prod-list").render();
    }
  }
}

class ShoppingCart extends Component {
  cartItems = [];
  totalOutput;

  constructor(hookElementID) {
    super(hookElementID);
  }

  render() {
    const section = this.createRootElement("section", "cart");
    section.innerHTML = `
        <h2>Total: Rs.${0}</h2>
        <button>Order Now!</button>
        `;
    this.totalOutput = section.querySelector("h2");
  }

  addToCart(product) {
    this.cartItems.push(product);
    this.totalOutput.innerHTML = `<h2> Total: Rs. ${this.cartItems.reduce(
      (prev, curr) => prev + curr.price,
      0
    )}</h2>`;
  }
}

class Shop {
  render() {
    const productList = new ProductList("app");
    this.shoppingCart = new ShoppingCart("app");
    this.shoppingCart.render();
    productList.render();
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.shoppingCart;
  }

  static addToCart(product) {
    this.cart.addToCart(product);
  }
}

App.init();
