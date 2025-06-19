import React from "react";
import { ActivityIndicator, Alert, Button, Dimensions, Image, Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

const { height, width } = Dimensions.get('window');


export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()}: Du tryckte på knappen!`);
  }
  return (
    <SafeAreaView>
      <View style={ styles.page }>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Image style={styles.picStyle} source={require('@/assets/images/tiny_logo.png')} />
      <Text style={ styles.text }>Skitäckligt, Johan Larsson!</Text>
      <Text style={ [styles.text, styles.selectedText] }>-JAG FICK BILEN I HUVET!{'\n'}-(Fick du?){'\n'}-Flytta på bilfan innan den klämmer sönder mig!</Text>
      <ActivityIndicator size="large" color="#61DBFB" />

      <Button title="Tryck här förfan" onPress={onButtonPress} />
      <Text style={ [styles.text, styles.selectedText] }>Vi är på {Platform.OS}-plattform med upplösning: {width}x{height}</Text>

      <Text style= {[styles.flexstuff]}>Lira lira lura, segla till Angostura. Krakel Spektakel samt Opsis Kalopsis och Kusin Vitamin lär invandrarna vårt nordiska språk.</Text>
    </View>
    <View style={ styles.otherstyle }>
      <Text style={ styles.text }>React Native är rätt kul iallafall. Se bara hur mycket text som kan finnas här, men sen ska funktionerna komma.</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    marginTop: 40,
    backgroundColor: "#00AA00",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 22,
    color: "white",
    margin: 10,
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