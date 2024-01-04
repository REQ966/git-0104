const orders = [

    {
        id: 1,
        pizza: "Hawaii",
        extra: "Kukrica",
        ital: "Pepsi zero",
        ar: 1500,

    }
,
    {
        id: 2,
        pizza: "Magyaros",
        extra: "Kukrica",
        ital: "Pepsi zero",
        ar: 1500,

    }
,
    {
        id: 3,
        pizza: "Margaréta",
        extra: "Kukrica",
        ital: "Pepsi zero",
        ar: 1500,

    }
    ,
    {
        id: 4,
        pizza: "Songoku",
        extra: "Kukrica",
        ital: "Pepsi zero",
        ar: 1500,
    }
    ,
    {
        id: 5,
        pizza: "Magyaros",
        extra: "Kukrica",
        ital: "Pepsi zero",
        ar: 1500,

    }
    ,
    {
        id: 6,
        pizza: "Csípős",
        extra: "Kukrica",
        ital: "Pepsi zero",
        ar: 1500,
    }

]


let output = ""

for(i in orders){
    output += 
            `<div class='rend'>
            <p> Rendelés száma: ${orders[i].id} </p>
            <hr>
            <p> Pizza típusa: ${orders[i].pizza} </p>
            <p> Extra: ${orders[i].extra} </p>
            <p> Ital: ${orders[i].ital} </p>
            <p> Ár: ${orders[i].ar} Ft</p>
            </div>`
}


document.querySelector(".order").innerHTML = output