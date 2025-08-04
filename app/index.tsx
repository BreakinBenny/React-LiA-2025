import { Stack } from 'expo-router';
import React, { useState } from "react";
import { Button, Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import ItemList from "./components/ItemList";
import SearchBar from "./components/SearchBar";

const { height, width } = Dimensions.get('window');

// TODO: [Utanför detaljvyn] Var är produkten på lager?
// Priset? När lades det till i databasen (så vi vet sakens ålder)?
export default function Index() {
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
        <ItemList />

        {/* <ProductList /> */}

        <View style={{flexDirection: 'row', margin: 15}}>
          <Button title="In" color='lightgray'/* onPress={onButtonPress}*/ />
          <Button title="Ut" color='#999999'/* onPress={onButtonPress}*/ />
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