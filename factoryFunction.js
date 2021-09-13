function pizzaFactory(){
    let small;
    let medium;
    let large;
    let total;

    function addPizza(size) {

        let total = 0;

        if (size === 'small'){
            small += 31.99;
            total += 31.99;
        }

        else if (size === 'medium'){
            medium += 51.99;
            total += 51.99;
        }
        
        else if (size === 'large'){
            large += 89.99;
            total += 89.99;
        }
    }

    function getTotal(){
        total = small + medium + large;
        return total;
    }

    return {
        addPizza,
        getTotal
    }

}