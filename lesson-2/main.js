class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this._goods = []; // data
    this._allProducts = []; // массив экземпляров товаров на основе this._goods

    this._fetchGoods();
    this._render();

    this.sumPrice = 0;
    this.sumProducts();
  }

  _fetchGoods() {
    this._goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  _render() {
    const block = document.querySelector(this.container);

    for (const product of this._goods) {
      // console.log(new ProductItem(product).render());
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  // Метод, результат суммарной стоимости всех товаров
  sumProducts() {
    for(let el of this._goods) {
      this.sumPrice += el.price;
    }
    console.log(this.sumPrice);
  }
}

class ProductItem {
  constructor(product, img='https://via.placeholder.com/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

const catalog = new ProductList();



// Блок корзины
class CartProduct {
  constructor(numberList, quantityInStock) {
    this.numberList = numberList;
    this.quantityInStock = quantityInStock;
  }

  // свойство удаления товара из корзины

  // свойство добавления количества со склада одинокового товара

  // проверка количества элементов на складе
}

class CartItem extends CartProduct {
  constructor(numberList, quantityInStockid, id, img, title, price){
    super(numberList, quantityInStockid);
    this.id = id;
    this.img = img;
    this.title = title;
    this.price = price;
  }

  // добавление в корзину

  // при покупке - удаление элемента со склада
}