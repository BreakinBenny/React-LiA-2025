import React, { useState } from "react";
import { Button, Dimensions, FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
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
        <Text style={ styles.text }>HUVUDSKÄRM</Text>
        <View style={{flex: 1, flexDirection: 'row', gap: 5}}>
          <View style={{ backgroundColor: 'white', minWidth: 20}}>
            <TextInput style={{fontSize: 25}} placeholder="Sök...                              🔎" />
          </View>
          <Button title="+" color='orange' onPress={() => {}} />
        </View>

        <Text style={ styles.text }>FLATLIST</Text>
        <FlatList style={{margin: 30, backgroundColor: 'lightgray', maxHeight: 350, width: 400, padding: 10}}
          data={varor}
          renderItem={({ item }) => {
            return (
              // Ska alla plagg visa minst två bilder utanför detaljvyn?
              <Pressable onPress={() => {}} style={{marginBottom: 10, padding: 10, backgroundColor: 'white', borderRadius: 5}}>
                <View key={item.id}>
                  <View style={{flexDirection: 'row', gap: 5}}>
                    <Image source={require('@/assets/images/tiny_logo.png')} />
                    <Image source={require('@/assets/images/tiny_logo.png')} />
                  </View>
                  <Text style={{lineHeight: 20}} key={item.id}>({item.size}) {item.title}, {item.valuation} 💚{'\n'}{'\n'}Tillagd {item.checkin}, finns i butik: {item.store}</Text>
                </View>
              </Pressable>
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
    marginTop: 40,
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