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
    colors?: Colors, // Två färger, t.ex. svart och röd
    pattern?: Pattern, // Om plagget har mönster, vilket?
    checkin: Date,
    sold: false,
    solddate?: Date,
    store: Store
};


export default function ProductItem({title, brand, pic, thumb, shortdesc, category,
    size, price, colors,checkin, sold,solddate, store}: ProductItemProps) {

    return (
        //TODO: BILDEN måste visas
        //<ProductItem id="" title="" size="Small" {valuation}{'\n'} {store}</ProductItem>

        <View>
            <View style={{flexDirection: 'row', gap: 5}}>
                {pic ? <Image id="" source={require('@/assets/images/favicon.png')} /> : null}
                {thumb ? <Image id="" source={require('@/assets/images/tiny_logo.png')} /> : null}
            </View>
            <Text>{size ? `(${size}}`: 'Ingen/Okänd storlek'} - ({brand ? `${brand}` : 'Inget märke'}) {title} - {shortdesc ? `${shortdesc}`: '(Ingen beskrivning!)'}{'\n'}
                ({category ? `${category}` : 'Ingen kategori'}){'\n'}
                {category<6 ? `${colors}` : null}{'\n'}
                
                
                {price ? `Pris: ${price} (${price / 20} 💚)` : 'PRIS SAKNAS!'}
                {checkin ? ` - Tillagd ${checkin.toLocaleDateString()}` : '[DATUM SAKNAS!]'}{'\n'}{'\n'}
                {sold ? `Såldes ${solddate} ` : null}i butik: {store}
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
    color2: '#000'
}
enum Size {
    Small = 1,
    Medium,
    Large
}
enum Pattern {
    None, 
    Solid = 1,
    Patterned
}

enum Store {
    Caroli = 1,
    Kronprinsen
}