import { Stack } from 'expo-router';
import React, { useState } from "react";
import { Alert, Button, Dimensions, FlatList, Image, Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar";
import varor from "./models/varor.json"; //Must be moved to be inside the below function in future...

const { height, width } = Dimensions.get('window');

// TODO: [Utanför detaljvyn] Var är produkten på lager?
// Priset? När lades det till i databasen (så vi vet sakens ålder)?
export default function Index() {
  const onButtonPress = () => {}
  const [text, onChangeText] = React.useState('Useless text... 🔎');
  const [number, onChangeNumber] = React.useState('');

  const [dummy, dummyState] = useState('');
  const [hideSold, setHideSold] = useState(false);

  const toggleHideSold = () => {
    const newHideSold = hideSold === false ? true : false;
    setHideSold(newHideSold);
  }

  // <ProductItem key={item.id} image={item.image}>{item.title} /></ProductItem>

  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Huvudmeny" }} />
      <View style={ styles.page }>
        {/* <Text style={ styles.text }>HUVUDSKÄRM</Text> */}
        <SearchBar />

        {/* LÄGG IN FILTER HÄR… */}
        
        

        {/* <Text style={ styles.text }>FLATLIST</Text> */}
        <FlatList style={{margin: 30, backgroundColor: 'lightgray', maxHeight: 350, width: 400, padding: 10}}
          data={varor} keyExtractor={item => item.id} renderItem={({ item }) => {
            return (  // Ska alla plagg visa minst två bilder utanför detaljvyn?
              <View>
                {/* <Link href={`\/detail?id=${item.id}`} asChild onPress={() => { Platform.OS === 'web' ? console.log('Web link clicked') :
                  Alert.alert('', '' );
                }}> */}

                  {/* Gör sakerna här till en egen komponent! */}
                    <Pressable key={item.id} style={{marginBottom: 10, padding: 10, backgroundColor: 'white', borderRadius: 5}}
                    onPress={() => {
                      {Platform.OS === 'web' ? console.log('Web link clicked') :
                      Alert.alert('Produktdetaljer', `Storlek: ${item.size}\n\nIncheckningsdatum: ${item.checkindate}\nUtcheckningsdatum: ${item.checkoutdate}\n\n\n\n\n\n\n\n\n\n`,
                        [{ text: "Radera", style: 'destructive', onPress: () => console.log("Ska vi radera varan?") },
                          { text: "Redigera", onPress: () => console.log("Vi redigerar varan...") },
                          { text: "OK", isPreferred: true, onPress: () => console.log("Tryckte på OK...") }
                        ], {cancelable: true})
                      }
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
                  {/* Gör sakerna ovan till en egen komponent! */}

                {/*</Link>*/}
              </View>
            );
          }}
        />
        {/* <ProductList /> */}

        <View style={{flexDirection: 'row', margin: 15}}>
          <Button title="In" color='lightgray' onPress={onButtonPress} />
          <Button title="Ut" color='#999999' onPress={onButtonPress} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#00BB00",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 22, maxWidth: 400,
    color: "white",
    margin: 0,
    padding: 5
  },
  selectedText: {
    backgroundColor: "orange",
    color: "black"
  },
  otherstyle: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
    backgroundColor: "#777"
  },
  picStyle: {
    resizeMode: "center",
    width: Dimensions.get("window").width -50, height: 100,
    flex: 1
  },
  flexstuff: {
    flex: 1, fontSize: 25,
    color: "azure",
    margin: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  }
});