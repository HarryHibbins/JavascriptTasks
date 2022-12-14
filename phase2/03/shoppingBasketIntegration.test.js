const Candy = require("./candy");
const ShoppingBasket = require("./shoppingBasket");

describe("Shopping Basket  Integration", () => {
  it("returns total price as 4.99 when candy added", () => {
    const basket = new ShoppingBasket();
    basket.addItem(new Candy("Skittle", 3.99));
    expect(basket.getTotalPrice()).toBe(3.99);
  });
  it("returns total price as 4.99 when candy added", () => {
    const basket = new ShoppingBasket();
    basket.addItem(new Candy("Skittle", 3.99));
    basket.addItem(new Candy("Skittle", 3.99));
    expect(basket.getTotalPrice()).toBe(7.98);
  });
  it("returns total price as 4.99 when candy added", () => {
    const basket = new ShoppingBasket();
    basket.addItem(new Candy("Skittle", 3.99));
    basket.addItem(new Candy("Skittle", 3.99));
    basket.applyDiscount(2);
    expect(basket.getTotalPrice()).toBe(5.98);
  });
});
