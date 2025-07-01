import React, { useState } from "react";
import { Button, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar";

const { height, width } = Dimensions.get('window');

// TODO: Detaljvyn, här visas fler av produktens egenskaper än i huvudskärmen?
// ?
export default function DetailView() {
  const onButtonPress = () => {}
  const [dummy, dummyState] = useState("");
  const [text, onChangeText] = React.useState('Useless text... 🔎');
  const [number, onChangeNumber] = React.useState('');

  // <ProductItem key={item.id} image={item.image}>{item.title} /></ProductItem>

  return (
    <SafeAreaView>
      <View style={ styles.page }>
        <Text style={ styles.text }>DETALJVY</Text>
        <View style={{flex: 1, flexDirection: 'row', gap: 5}}>
          <SearchBar />
          <Button title="+" color='orange' onPress={() => {}} />
        </View>

        <Text style={ styles.text }>SCROLLVIEW</Text>
        <ScrollView style={{margin: 30, backgroundColor: 'lightgray', maxHeight: 300, width: 500, padding: 10}}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Image source={require('@/assets/images/favicon.png')} />
            <Image source={require('@/assets/images/favicon.png')} />
            <Text>PRODUKT (TRÖJA, BYXOR, SKOR, MÖSSA...)</Text>
          </View>

            <Text style={{lineHeight: 20, padding: 30}}>VARA MED MER BESKRIVNING ÄN PÅ HUVUDSKÄRMEN{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}
              I lager på: CAROLI, (och/eller) KRONPRINSEN{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        </ScrollView>

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