import { Image, Text, View } from 'react-native';

type ProductItemProps = {
    title: string,
    brand?: string, // Tillverkare, märke, musikband, artist mm...
    pic: string,
    thumb: string,
    shortdesc: string,
    category: Category,
    size?: Size,
    price?: number,
    color1?: '#000', // Huvudfärgen, t.ex. svart ('#000')
    color2?: '#fff', // Färg två, t.ex. vit ('#fff') i det här fallet
    pattern?: Pattern, // Om plagget har mönster, vilket?
    checkin: Date,
    sold: false,
    checkedout?: Date,
    store: Store
};


export default function ProductItem({title, brand, pic, thumb, shortdesc, category,
    size, pattern, price, color1, color2, checkin, sold, checkedout, store}: ProductItemProps) {

    return (
        //TODO: BILDEN måste visas
        //<ProductItem id="" title="" size="Small" {valuation}{'\n'} {store}</ProductItem>

        <View>
            <View style={{flexDirection: 'row', gap: 5}}>
                {pic ? <Image id="" source={require('@/assets/images/favicon.png')} /> : null}
                {thumb ? <Image id="" source={require('@/assets/images/tiny_logo.png')} /> : null}
            </View>
            <Text>{category<5 && size ? `(${size}}`: 'Ingen/Okänd storlek'} - ({brand ? `${brand}` : 'Inget märke'}) {title} - {shortdesc ? `${shortdesc}`: '(Ingen beskrivning!)'}{'\n'}
                ({category ? `${category}` : 'Ingen kategori'}){'\n'}
                
                {category<6 && color1 ? `${color1} ` : 'Inga färg vald'}, {category<6 && pattern ? `${pattern}` : 'Inget mönster'}{'\n'}
                {category<6 && color2 ? `och ${color2}` : null}
                
                
                {price ? `Pris: ${price} (${price / 20} 💚)` : 'PRIS SAKNAS!'}
                {checkin ? ` - Tillagd ${checkin.toLocaleDateString()}` : '[DATUM SAKNAS!]'}{'\n'}{'\n'}

                {/* Såldes varan eller checkades den helt enkelt ut? Då visas antingen av följande nedan… */}
                {sold&&checkedout ? `Såldes ${checkedout} ` : null}
                {!sold&&checkedout ? `Togs ur registret ${checkedout} `: null}i butik: {store}
            </Text>
        </View>
    );
}

enum Category {
    Top = 1,
    Bottom,
    Shoes,
    Headwear,
    Accessories,
    Other
}
type Colors = {
    color1: '#000',
    color2: '#999'
}
enum Size {
    Small = 1,
    Medium,
    Large
}
enum Pattern {
    None,
    Solid,
    Patterned
}

enum Store {
    Caroli = 1,
    Kronprinsen
}