import { FlatList, Image, Pressable, Text, View } from "react-native";
import { varor } from "../models/varor";
//import { useState } from "react";


console.log(`${varor.length} varor finns i listan.`);

export default function ItemList({ navigation } : any) {

    return (
        <FlatList style={{margin: 30, backgroundColor: 'lightgray', maxHeight: 350, width: 400, padding: 10}}
        data={varor} keyExtractor={item => item.id} renderItem={({ item }) => {
            return (
            <View>
                <Pressable key={item.id} style={{marginBottom: 10, padding: 10, backgroundColor: 'white', borderRadius: 5}}
                onPress={() => {
                    {/*Platform.OS === 'web' ? console.log('Webblänk för vara klickad på.') : Alert.alert('Produktdetaljer', `Storlek: ${item.size}\n\n
                        
                        Incheckningsdatum: ${item.checkindate}\nUtcheckningsdatum: ${item.checkoutdate}\n\n\n\n\n\n\n\n\n\n`,
                        [{ text: "Radera", style: 'destructive', onPress: () => console.log("Ska vi radera varan?") },
                        { text: "Redigera", onPress: () => console.log("Vi redigerar varan...") },
                        { text: "OK", isPreferred: true, onPress: () => console.log("Tryckte på OK...") }
                        ], {cancelable: true})
                    */}
                    navigation.navigate('Detailmeny', {
                        category: item.category, price: item.price,
                        checkindate: item.checkindate,
                        checkoutdate: item.checkoutdate,
                        sold: item.sold, store: item.store,
                        brand: item.brand, size: item.size,
                        pattern: item.pattern,
                        color1: item.color1, color2: item.color2,
                        title: item.title, /*pic: item.pic, thumb: item.thumb*/
                    })
                    {/* brand, pic, thumb, shortdesc,
    category, size, pattern, price, color1, color2,
    checkindate, sold, checkoutdate, store */}
                }}>
                    <View style={{flexDirection: 'row', gap: 5}}>
                        {!item.image ? <Image source={require('@/assets/images/tiny_logo.png')} /> : <Image source={{ uri: item.image }} />}
                        {!item.image ? <Image source={require('@/assets/images/tiny_logo.png')} /> : <Image source={{ uri: item.image }} />}
                    </View>
                    <Text style={{lineHeight: 25}} key={item.id}>
                        {item.title}{item.category<6 && item.brand ? ` (${item.brand})`: null}{'\n'}
                        
                        Tillagd {item.checkindate ? `${item.checkindate}`: '[DATUM SAKNAS!]'}
                    </Text>
                    <Text style={{textAlign: 'right', fontWeight: 'bold', color: 'darkgreen'}}>
                        {'\n'}{item.price ? `Pris: ${item.price} kr (${item.price / 20} 💚).` : `Inget pris satt!`} {item.sold ? `Såldes ${item.checkoutdate} ` : null}i butik: {item.store}
                    </Text>
                </Pressable>

                {/* Link */}
            </View>
            );
        }}
        />
    )
}