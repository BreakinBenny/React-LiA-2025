import { Link } from 'expo-router';
import React, { useState } from "react";
import { Button, Dimensions, FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar";
import varor from "./models/varor.json"; //Must be moved to be inside the below function in future...

const { height, width } = Dimensions.get('window');

// TODO: [Utanför detaljvyn] Var är produkten på lager?
// Priset? När lades det till i databasen (så vi vet sakens ålder)?
export default function Index() {
  const onButtonPress = () => {}
  const [dummy, dummyState] = useState("");
  const [text, onChangeText] = React.useState('Useless text... 🔎');
  const [number, onChangeNumber] = React.useState('');

  // <ProductItem key={item.id} image={item.image}>{item.title} /></ProductItem>

  return (
    <SafeAreaView>
      <View style={ styles.page }>
        {/* <Text style={ styles.text }>HUVUDSKÄRM</Text> */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SearchBar />
          <Link href="./add" asChild>
            <Button title="➕" color='orange' onPress={() => {}} />
          </Link>
        </View>

        {/* <Text style={ styles.text }>FLATLIST</Text> */}
        <FlatList style={{margin: 30, backgroundColor: 'lightgray', maxHeight: 350, width: 500, padding: 10}}
          data={varor}
          renderItem={({ item }) => {
            return (
              // Ska alla plagg visa minst två bilder utanför detaljvyn?
              <Link href="/detail" asChild>
                <Pressable style={{marginBottom: 10, padding: 10, backgroundColor: 'white', borderRadius: 5}}
                  onPress={( item ) => {
                    
                  }}>
                  <View key={item.id}>
                    <View style={{flexDirection: 'row', gap: 5}}>
                      <Image source={require('@/assets/images/tiny_logo.png')} />
                      <Image source={require('@/assets/images/tiny_logo.png')} />
                    </View>
                    <Text style={{lineHeight: 25}} key={item.id}>
                      ({item.size ? `${item.size}`: 'Ingen/Okänd storlek'}) {item.title}{item.brand ? ` (${item.brand})`: null}{'\n'}

                      Tillagd {item.checkin ? `${item.checkin}`: '[DATUM SAKNAS!]'}, {item.sold ? `såldes ${item.solddate} ` : null}i butik: {item.store}
                    </Text>
                    <Text style={{textAlign: 'right', fontWeight: 'bold', color: 'darkgreen'}}>
                      {'\n'}{item.price ? `Pris: ${item.price} kr (${item.price / 20} 💚)` : `Inget pris satt!`}
                    </Text>
                  </View>
                </Pressable>
              </Link>
            );
          }}
        />

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