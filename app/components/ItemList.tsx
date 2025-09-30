import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, FlatList, Image, Pressable, Text, View } from "react-native";
import { Product, varor } from "../models/varor";

const loadItems = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('varor');
        //return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch(e) {
        console.log('Kunde inte läsa varorna.', e);
        return [];
    }
}
console.log(`${varor.length} varor finns i listan.`);

export default function ItemList({ navigation, deleteProduct, products}:
    { navigation: any, deleteProduct: (product: Product) => void,
        editProduct: (product: Product) => void, products: Product[] }) {
    return (
        <FlatList style={{margin: 30, backgroundColor: 'lightgray', maxHeight: 350, width: 400, padding: 10}}
        data={products} keyExtractor={item => item.id} renderItem={({ item }) => {
            return (
                <View>
                    <Pressable key={item.id} style={{marginBottom: 10, padding: 10, backgroundColor: 'white', borderRadius: 5}}
                    onPress={() => {
                    navigation.navigate('Detailmeny', { item, products /*category: item.category, price: item.price,
                        checkindate: item.checkindate, checkoutdate: item.checkoutdate, sold: item.sold,
                        store: item.store, brand: item.brand, size: item.size, pattern: item.pattern,
                        color1: item.color1, color2: item.color2, title: item.title, pic: item.image,
                        thumb: item.thumb*/
                    })
                    }}>
                        <View style={{flexDirection: 'row', gap: 5}}>
                            {!item.image ? <Image style={{width: 33, height: 33}} source={require('@/assets/images/react-logo.png')} /> : <Image source={{ uri: item.image }} />}
                            {!item.thumb ? <Image source={require('@/assets/images/tiny_logo.png')} /> : <Image source={{ uri: item.thumb }} />}
                        </View>
                        <Text style={{lineHeight: 25}} key={item.id}>
                            {item.title}{item.category<6 && item.brand ? ` (${item.brand})`: null}{'\n'}
                        
                            Tillagd {item.checkindate ? `${item.checkindate}`: '[DATUM SAKNAS!]'}
                        </Text>
                        <Text style={{textAlign: 'right', fontWeight: 'bold', color: 'darkgreen'}}>
                            <Button color="red" title="🗑️" onPress={() => deleteProduct(item) } />
                            {'\n'}{item.price ? `Pris: ${item.price} kr (${item.price / 20} 💚).` : `Inget pris satt!`} {item.sold ? `Såldes ${item.checkoutdate} ` : null}i butik: {item.store}
                        </Text>
                    </Pressable>
                </View>
            );
        }}/>
    )
}