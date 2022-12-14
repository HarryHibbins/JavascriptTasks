class ShoppingBasket{
  constructor(candy){ //must pass an array of candy
    this.candy = candy;
  };

  getTotalPrice(){
    let total_price = 0;
    for (let i=0;i<this.count();i++){
      total_price += this.candy[i].getPrice()

    }
    return total_price
  }

  addItem(candy){
    this.candy = this.candy.concat(candy);
  }


  count(){
    return this.candy.length;
  }
};

module.exports = ShoppingBasket

// SB = require('./shopping_basket')
// Candy = require('./candy')