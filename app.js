const orders = [

    {
        id: 1,
        pizza: "Hawaii",
        extra: "Kukorica",
        ital: "Pepsi zero",
        ar: 3500,

    }
,
    {
        id: 2,
        pizza: "Magyaros",
        extra: "Kukorica, mustár",
        ital: "Fanta",
        ar: 2500,

    }
,
    {
        id: 3,
        pizza: "Margaréta",
        extra: "Paprika",
        ital: "Ásványvíz",
        ar: 4000,

    }
    ,
    {
        id: 4,
        pizza: "Songoku",
        extra: "Ketchup",
        ital: "Sprite",
        ar: 1500,
    }
    ,
    {
        id: 5,
        pizza: "Magyaros",
        extra: "Paprika",
        ital: "Coca cola",
        ar: 3000,

    }
    ,
    {
        id: 6,
        pizza: "Csípős",
        extra: "Majonéz",
        ital: "Pepsi zero",
        ar: 1500,
    }

]


let output = ""

for(i in orders){
    output += 
            `<div class='rend'>
            <p> Rendelés száma: <b>${orders[i].id}</b> </p>
            <hr>
            <p> Pizza típusa: <b>${orders[i].pizza}</b> </p>
            <p> Extra: <b>${orders[i].extra}</b> </p>
            <p> Ital: <b>${orders[i].ital}</b> </p>
            <p> Ár: <b>${orders[i].ar} Ft</b> </p>
            </div>`
}


document.querySelector(".order").innerHTML = output