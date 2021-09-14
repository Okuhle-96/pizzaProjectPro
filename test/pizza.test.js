
const assert = require("assert");
const perfectPizza = require("../factoryFunction");

    describe('Pizza Perfect', function () {
    const pizzaPrice = perfectPizza();

    it('should be able to add two small pizzas and return Total cost of R70 on the cart.', function () {
        pizzaPrice.addPizza("small");
        pizzaPrice.addPizza("small");
        assert.equal(63.98, pizzaPrice.grandTotal());
    }); 
    it('should be able to add three more meduim pizzas and return Grand Total cost of R265 on the cart.', function () {
        pizzaPrice.addPizza("medium");
        pizzaPrice.addPizza("medium");
        pizzaPrice.addPizza("medium");
        assert.equal(219.95, pizzaPrice.grandTotal());
    });
    it('should be able to add three more large pizzas and return Grand Total cost of R520 on the cart.', function () {
        pizzaPrice.addPizza("large");
        pizzaPrice.addPizza("large");
        pizzaPrice.addPizza("large");
        assert.equal(+489.91999999999996
            , pizzaPrice.grandTotal());
    });
    });