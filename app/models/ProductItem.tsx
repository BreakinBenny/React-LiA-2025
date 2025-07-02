import { Image, Text, View } from 'react-native';

type ProductItemProps = {
    title: string,
    brand: string,
    pic: string,
    thumb: string,
    shortdesc: string,
    category: Category,
    size: Size,
    valuation: number,
    checkin: Date,
    sold: Boolean,
    store: Store
};


export default function ProductItem({title, brand, pic, thumb, shortdesc, category,
    size, valuation, checkin, sold, store}: ProductItemProps) {

    return (
        //TODO: BILDEN måste visas
        //<ProductItem id="" title="" size="Small" {valuation}{'\n'} {store}</ProductItem>

        <View>
            {pic ? <Image id="" source={require('@/assets/images/favicon.png')} /> : null}
            {thumb ? <Image id="" source={require('@/assets/images/tiny_logo.png')} /> : null}
            <Text>{size ? `(${size}}`: 'Ingen/Okänd storlek'} - {brand ? `${brand} ` : null}{title} - {shortdesc ? `${shortdesc}`: '(Ingen beskrivning!)'}{'\n'}
                ({category ? `${category}` : 'Ingen kategori'}){'\n'}{'\n'}
                
                {valuation} kr
                {checkin ? ` - Tillagd ${checkin.toLocaleDateString()}` : '[DATUM SAKNAS!]'}{'\n'}{'\n'}
                {sold ? `Såldes ${sold} ` : null}i butik: {store}
            </Text>
        </View>
    );
}

enum Category {
    "Top" = 1,
    "Bottom",
    "Shoes",
    "Jacket"
}
enum Size {
    "Small" = 1,
    "Medium",
    "Large"
}
enum Store {
    "Caroli" = 1,
    "Kronprinsen"
}