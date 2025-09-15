export type Product = {
    id: string;
    image?: string;
    title?: string;
    thumb?: string;
    brand?: string;
    category: number;
    size: string | number;
    pattern?: string;
    store: number;
    checkindate?: string;
    sold: boolean;
    checkoutdate: string;
    price: number;
    material?: string;
    color1?: string;
    color2?: string;
}

export let varor: Product[] = [
    {
        "id": "skitäckligt",
        "image": "",
        "title": "Pocketbok",
        "brand": "",
        "category": 6,
        "size": "N/A",
        "pattern": "",
        "store": 2,
        "checkindate": "",
        "sold": false,
        "checkoutdate": "",
        "price": 20
    },
    {
        "id": "johanlarsson",
        "image": "",
        "category": 1,
        "title": "Blommig blus",
        "brand": "",
        "size": 3,
        "material": "Polyester",
        "color1": "Flerfärgad",
        "pattern": "Mönster (Blommor i olika färger)",
        "checkindate": "2024-03-28",
        "checkoutdate": "",
        "sold": false,
        "price": 80,
        "store": 2
    },
    {
        "id": "felixrecenserar",
        "image": "",
        "title": "Linne",
        "category": 1,
        "brand": "",
        "size": 2,
        "material": "85% bomull, 8% polyester, 7% ull",
        "color1": "Gul",
        "color2": "",
        "pattern": "Inget mönster",
        "store": 2,
        "sold": false,
        "checkindate": "2024-04-04",
        "checkoutdate": "",
        "price": 120
    },
    {
        "id": "Bil_i_huvet",
        "image": "",
        "title": "Shorts",
        "brand": "",
        "category": 2,
        "size": 1,
        "material": "Bomull(?)",
        "color1": "Svart",
        "color2": "",
        "pattern":"Inget mönster",
        "store": 2,
        "sold": false,
        "price": 60,
        "checkindate": "2024-04-04",
        "checkoutdate": ""
    }

]