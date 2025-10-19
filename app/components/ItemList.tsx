import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, FlatList, Image, Pressable, Text, View } from "react-native";
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

export default function ItemList({ navigation, deleteProduct, editProduct, products}: { navigation: any, products: Product[],
    deleteProduct: (product: Product) => void, editProduct: (updatedProduct: Product, product: Product) => void }) {
    return (
        <FlatList style={{margin: 30, backgroundColor: 'lightgray', maxHeight: 350, width: 400, padding: 10}}
        ListEmptyComponent={ActivityIndicator} data={products} keyExtractor={item => item.id} renderItem={({ item }) => {
            return (
                <View>
                    <Pressable key={item.id} style={{marginBottom: 10, padding: 10, backgroundColor: 'white', borderRadius: 5}}
                    onPress={() => { navigation.navigate('Detailmeny', { item, products: products, route: navigation,
                        editProduct: editProduct, deleteProduct: deleteProduct /*category: item.category, price: item.price,
                        checkindate: item.checkindate, checkoutdate: item.checkoutdate, sold: item.sold,
                        store: item.store, brand: item.brand, size: item.size, pattern: item.pattern,
                        color1: item.color1, color2: item.color2, title: item.title, pic: item.image,
                        thumb: item.thumb*/ }, console.log(`Tryckte på vara med ID: ${item.id}`)); }}>
                        <View style={{flexDirection: 'row', gap: 5}}>
                            {!item.image ? <Image style={{width: 33, height: 33}} source={require('@/assets/images/react-logo.png')} /> : <Image source={{ uri: item.image }} />}
                            {!item.thumb ? <Image source={require('@/assets/images/tiny_logo.png')} /> : <Image source={{ uri: item.thumb }} />}
                            {<Text style={{flex: 1, textAlign: 'right'}}>ID: '{item.id}'</Text>}
                        </View>
                        <Text style={{lineHeight: 25}} key={item.id}>
                            {item.title}{item.category<6 && item.brand ? ` (${item.brand})`: null}{'\n'}
                        
                            Tillagd {item.checkindate ? `${item.checkindate}`: '[DATUM SAKNAS!]'}
                        </Text>
                        <Text style={{textAlign: 'right', fontWeight: 'bold', color: 'darkgreen'}}>
                            {'\n'}{item.price ? `Pris: ${item.price} kr (${item.price / 20} 💚).` : `Inget pris satt!`} {item.sold ? `Såldes ${item.checkoutdate} ` : null}i butik: {item.store}
                        </Text>
                    </Pressable>
                </View>
            );
        }}/>
    )
}