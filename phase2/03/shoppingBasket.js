class ShoppingBasket {
  constructor() {
    this.basket = [];
    this.discount = 0;
  }

  addItem(candy) {
    this.basket.push(candy);
  }

  getItems() {
    return this.basket.map((candy) => {
      return candy.getName();
    });
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.basket.forEach((candy) => {
      totalPrice += candy.getPrice();
    });
    return totalPrice - this.discount;
  }
}

module.exports = ShoppingBasket;
