

export default function ProductItem({
    id = String,
    title = String,
    image = String,
    short = String,
    category = Category,
    size = Size,
    valuation = 0,
    checkin = Date,
    store = Store
}) {}

enum Category {
    Shirt = 1,
    Pants,
    Shoes,
    Jacket
}

enum Size {
    Small,
    Medium,
    Large
}

enum Store {
    Caroli,
    Kronprinsen
}