//import { Link } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import varor from "./varor.json"; //Must be moved to be inside the below function in future...

export default function ProductList() {
    <FlatList style={{margin: 30, backgroundColor: 'lightgray', maxHeight: 350, width: 500, padding: 10}}
    data={varor} renderItem={({ item }) => {
        return (
            // Ska alla plagg visa minst två bilder utanför detaljvyn?
            //<Link href="/detail" asChild>
                <Pressable style={{marginBottom: 10, padding: 10, backgroundColor: 'white', borderRadius: 5}}
                    onPress={( item ) => {
                    /* I detaljvyn ska vi visa mer information om produkten, t.ex. storlek,
                      färg, mönster (om applicerbart & definierat), pris, butik...
                    */
                    // console.log('Produkt nummer # vald:', item);

                    }}>
                    <View key={item.id}>
                        <View style={{flexDirection: 'row', gap: 5}}>
                            <Image source={require('@/assets/images/tiny_logo.png')} />
                            <Image source={require('@/assets/images/tiny_logo.png')} />
                        </View>
                    </View>
                    <Text style={{lineHeight: 25}} key={item.id}>
                        ({item.size ? `${item.size}`: 'Ingen/Okänd storlek'}) {item.title}{item.brand ? ` (${item.brand})`: null}{'\n'}

                        Tillagd {item.checkindate ? `${item.checkindate}`: '[DATUM SAKNAS!]'}, {item.sold ? `såldes ${item.checkoutdate} ` : null}i butik: {item.store}
                    </Text>
                    <Text style={{textAlign: 'right', fontWeight: 'bold', color: 'darkgreen'}}>
                        {'\n'}{item.price ? `Pris: ${item.price} kr (${item.price / 20} 💚)` : `Inget pris satt!`}
                    </Text>
                </Pressable>
            //</Link>
        );
    }}
    />
}