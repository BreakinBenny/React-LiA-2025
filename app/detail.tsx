import React, { useState } from "react";
import { Button, Dimensions, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import SearchBar from "./components/SearchBar";
import ProductItem from "./models/ProductItem";

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
        {/* <Text style={ styles.text }>DETALJVY</Text> */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SearchBar />
        </View>

        {/*
        <View style={{flexDirection: 'row', margin: 10}}>
        <ScrollView style={{margin: 30, backgroundColor: 'lightgray', width: 500, padding: 10}}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Image source={require('@/assets/images/favicon.png')} />
            <Image source={require('@/assets/images/tiny_logo.png')} />
            <Text>PRODUKT (TRÖJA, BYXOR, SKOR, MÖSSA...)</Text>
          </View>

          <Text style={{lineHeight: 20, padding: 30}}>VARA MED MER BESKRIVNING ÄN PÅ HUVUDSKÄRMEN{'\n'}{'\n'}{'\n'}
            I lager på: CAROLI, (och/eller) KRONPRINSEN{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}
          </Text>
        </ScrollView>
        */}
        <ScrollView style={{margin: 30, backgroundColor: 'yellow', width: 500, padding: 10}}>
          <ProductItem title="[Produkt]" brand="[Inget märke]" pic={require('@/assets/images/favicon.png')}
            thumb={require('@/assets/images/favicon.png')}
            //id="dföjlr"
            pattern={1}
            size={1}
            checkin={new Date("2024-04-25")}
            price={100}
            shortdesc=""
            sold={false}
            solddate={new Date("2024-04-30")}
            store={1}
            category={1}
          />
        </ScrollView>
        {/* </View> */}

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