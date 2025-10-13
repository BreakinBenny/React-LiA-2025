import { Button, Image, Text, View } from 'react-native';

export default function ProductItem({route, deleteProduct, editProduct, item,
    id, title, brand, pic, thumb, shortdesc, category, size, pattern, price,
    color1, color2, checkindate, sold, checkoutdate, store}: { route: any, item: any,
        deleteProduct: (product: any) => void, editProduct: (product: any) => void,
        id?: string, title?: string, brand?: string,
        pic?: string, thumb?: string, shortdesc?: string,
        category?: Category, size?: Size, pattern?: Pattern,
        price?: number, color1?: string, color2?: string,
        checkindate?: Date, sold?: Boolean, checkoutdate?: Date,
        store?: Store}) {

    return (
        //TODO: BILDEN måste visas
        //<ProductItem id="" title="" size="Small" {valuation}{'\n'} {store}</ProductItem>

        <View>
            <View style={{flexDirection: 'row', gap: 5, marginBottom: 80}}>
                {!pic ? <Image source={require('@/assets/images/react-logo.png')} /> : <Image source={{ uri: pic }} />}
                {!thumb ? <Image source={require('@/assets/images/favicon.png')} /> : <Image source={{ uri: thumb }} />}

                <View style={{flexDirection: 'row-reverse', alignItems: 'flex-start', flex: 1}}>
                    <Button color="red" title="Radera 🗑️" onPress={() => deleteProduct(item) } />
                </View>
            </View>
            <View style={{flexDirection: 'column'}}>
                {category && category==6 && title ? <Text style={{fontSize: 24, fontStyle: 'italic'}}>{title}</Text> : null
                    //Titel om definerat, vi har kategori 6 och variabeln ärdefinierad
                }
            </View>
            <Text>{category && category != 6 && size ? `(${size}`: 'Ingen/Okänd storlek'} - ({brand ? `${brand}` : 'Inget märke'}) - {shortdesc ? `${shortdesc}`: '(Ingen beskrivning!)'}{'\n'}
                ({category ? `Kategori ${category}` : 'Ingen kategori'}){'\n'}
                
                {category && category<6 ? `${color1} ` : null}{category && category==6 ? null : `- ${pattern}`}{'\n'}
                {category && category<6 && color1 && color2 ? `${color1} och ${color2}` : null}
                
                
                {checkindate ? `Tillagd ${checkindate}` : '[DATUM SAKNAS!]'}{'\n'}{'\n'}

                {/* Såldes varan eller checkades den helt enkelt ut? Då visas antingen av följande nedan… */}
                
                {price ? `Pris: ${price} kr (${price / 20} 💚).` : 'PRIS SAKNAS!'} {sold && checkoutdate ? `Såldes ${checkoutdate} ` : null}
                {!sold&&checkoutdate ? `Togs ur registret ${checkoutdate} `: null}i butik: {store}

                
            </Text>
            <View style={{flex: 1, flexDirection: 'row-reverse', alignItems: 'flex-start'}}>
                <Button color="goldenrod" title="Redigera 📝"
                onPress={() => route.navigate("Redigera produkt", { route: route, editProduct: editProduct })} />
            </View>
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
    'Caroli' = 1,
    'Kronprinsen'
}