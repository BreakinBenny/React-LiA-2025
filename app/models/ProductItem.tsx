import { Image, Text, View } from 'react-native';

type ProductItemProps = {
    id?: string, // Unikt ID för varje produkt
    title?: string,
    brand?: string, // Tillverkare, märke, musikband, artist mm...
    pic?: string,
    thumb?: string,
    shortdesc?: string,
    category?: Category,
    size?: Size,
    price?: number,
    color1?: string, // Huvudfärgen, t.ex. svart ('#000')
    color2?: string, // Färg två, t.ex. vit ('#fff') i det här fallet
    pattern?: Pattern, // Om plagget har mönster, vilket?
    checkindate?: Date,
    sold?: Boolean,
    checkoutdate?: Date,
    store?: Store
};

export default function ProductItem({
    id, title, brand, pic, thumb, shortdesc,
    category, size, pattern, price, color1, color2,
    checkindate, sold, checkoutdate, store}: ProductItemProps) {

    return (
        //TODO: BILDEN måste visas
        //<ProductItem id="" title="" size="Small" {valuation}{'\n'} {store}</ProductItem>

        <View>
            <View style={{flexDirection: 'row', gap: 5, marginBottom: 80}}>
                {!pic ? <Image source={require('@/assets/images/react-logo.png')} /> : <Image source={{ uri: pic }} />}
                {!thumb ? <Image source={require('@/assets/images/favicon.png')} /> : <Image source={{ uri: thumb }} />}
                {category && category==6 && title ? <Text>{title}</Text> : null
                    //Titel om definerat och vi är i kategori 6 och har variabeln definierad
                }
            </View>
            <Text>{category && category<6 && size ? `(${size}}`: 'Ingen/Okänd storlek'} - ({brand ? `${brand}` : 'Inget märke'}) {title} - {shortdesc ? `${shortdesc}`: '(Ingen beskrivning!)'}{'\n'}
                ({category ? `Kategori ${category}` : 'Ingen kategori'}){'\n'}
                
                {category && category<6 ? `${color1} ` : null}{category && category<6 ? `- ${pattern}` : null}{'\n'}
                {category && category<6 && color1 && color2 ? `${color1} och ${color2}` : null}
                
                
                {checkindate ? ` - Tillagd ${checkindate.toLocaleDateString()}` : '[DATUM SAKNAS!]'}{'\n'}{'\n'}

                {/* Såldes varan eller checkades den helt enkelt ut? Då visas antingen av följande nedan… */}
                
                {price ? `Pris: ${price} kr (${price / 20} 💚).` : 'PRIS SAKNAS!'} {sold&&checkoutdate ? `Såldes ${checkoutdate.toLocaleDateString()} ` : null}
                {!sold&&checkoutdate ? `Togs ur registret ${checkoutdate.toLocaleDateString()} `: null}i butik: {store}
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