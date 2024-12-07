const dishes =[
    {
        name: "Italain pasta",
        price: 9.55,
    },
    {
        name: "Rice with veggies",
        price: 8.65,
    },
    {
        name: "Chicken with potatos",
        price: 15.55,
    },
    {
        name: "vegetarian pizza",
        price: 6.45,
    },
];
const tax = 1.2;

function getprices(taxboolean) {
    for (menu of dishes) {
        let finalprice;
        if (taxboolean == true) {
            finalprice = menu.price * tax;
    }else if (taxboolean == false) {
        finalprice = menu.price;
    }
    else {
        console.log("you need to pass a boolean to the getprices");
        return;
    }
    console.log(`Dish: ${menu.name} Price: $${finalprice}`);
}
}

getprices(true,2)
getprices(false,10)