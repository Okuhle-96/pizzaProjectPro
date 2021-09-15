module.exports = function pizzaFactory(){
    let small = 0;
    let medium = 0;
    let large = 0;
    let total = 0;

    let smallQty = 0;
    let mediumQty = 0;
    let largeQty = 0;
  

    let pizzaOrders = [];

    function addSmall(size) {

        if (size === 'small'){
            small += 31.99;
            total += 31.99;
            smallQty++;
        }

    }

    function addMedium(size) {

         if (size === 'medium'){
            medium += 51.99;
            total += 51.99;
            mediumQty++;
        }

    }

    function addLarge(size) {
        
         if (size === 'large'){
            large += 89.99;
            total += 89.99;
            largeQty++;
        }

    }

    function getSmall(){
        return small;
    }

    function getSmallQty(){
        return smallQty;
    }

    function getMedium(){
        return medium;
    }

    function getMediumQty(){
        return mediumQty;
    }

    function getLarge(){
        return large;
    }

    function getLargeQty(){
        return largeQty;
    }

 

    function grandTotal(){
        total =  getSmall() + getMedium() + getLarge();
        return total;
        
    }

    return {
        addSmall,
        addMedium,
        addLarge,
        getSmall,
        getSmallQty,
        getMedium,
        getMediumQty,
        getLarge,
        getLargeQty,
        grandTotal,
        // totals
    }

}

