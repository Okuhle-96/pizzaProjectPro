module.exports = function pizzaFactory(){
    let small = 0;
    let medium = 0;
    let large = 0;

    let smallQty = 0;
    let mediumQty = 0;
    let largeQty = 0;
  

    let pizzaOrders = [];

    function addPizza(size) {

        let total = 0;

        if (size === 'small'){
            small += 31.99;
            total += 31.99;
            smallQty++;
        }

        else if (size === 'medium'){
            medium += 51.99;
            total += 51.99;
            mediumQty++;
        }
        
        else if (size === 'large'){
            large += 89.99;
            total += 89.99;
            largeQty++;
        }

    }

    function totals(){
    
        return{
            small : small.toFixed(2),
            medium : medium.toFixed(2),
            large : large.toFixed(2),

            smallQty : smallQty,
            mediumQty : mediumQty,
            largeQty : largeQty,
            grandTotal : grandTotal().toFixed(2)
        }
    }

    function grandTotal(){
        total = small + medium + large;
        return total;
    }

    return {
        addPizza,
        grandTotal,
        totals
    }

}

