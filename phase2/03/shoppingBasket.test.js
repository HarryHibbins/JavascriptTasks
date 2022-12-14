const ShoppingBasket = require("./shoppingBasket");

describe("Shopping Basket  Integration", () => {
  it("returns total price as 0", () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
  });
  it("returns total price as 4.99 when candy added", () => {
    const basket = new ShoppingBasket();
    const candyDouble = { getPrice: () => 3.99 };
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toBe(3.99);
  });
  it("returns total price as 4.99 when candy added", () => {
    const basket = new ShoppingBasket();
    const candyDouble = { getPrice: () => 3.99 };
    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toBe(7.98);
  });
  it("returns total price as 4.99 when candy added", () => {
    const basket = new ShoppingBasket();
    const candyDouble = { getPrice: () => 3.99 };
    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    basket.applyDiscount(2);
    expect(basket.getTotalPrice()).toBe(5.98);
  });
});
