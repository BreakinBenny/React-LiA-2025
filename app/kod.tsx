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

        <Image style={styles.picStyle} source={require('@/assets/images/tiny_logo.png')} />
        <Text style={ styles.text }>Hej, Johan Larsson!</Text>
        <Text style={ [styles.text, styles.selectedText] }>TEXT med både text och selectedText-styles</Text>
        <ActivityIndicator size="large" color="#61DBFB" />

        <Button title="Tryck här förfan" onPress={onButtonPress} />
        <Text style={ [styles.text, styles.selectedText] }>Vi är på {Platform.OS}-plattform med upplösning: {width}x{height}</Text>

        <Text style= {[styles.flexstuff]}>Lira lira lura, segla till Angostura. Krakel Spektakel samt Opsis Kalopsis och Kusin Vitamin lär folket vårt nordiska språk.</Text>

      </View>
      <View style={ styles.otherstyle }>
        <Text style={ styles.text }>React Native är rätt kul iallafall.{'\n'}
          Se bara hur mycket text som kan finnas här, men sen ska funktionerna komma.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { backgroundColor: "#00AA00", justifyContent: "center", alignItems: "center" },
  text: { fontSize: 22, color: "white", margin: 10, padding: 5 },
  selectedText: { backgroundColor: "orange", color: "black" },
  otherstyle: { flex: 1, justifyContent: "space-around", alignItems: "flex-start", backgroundColor: "#777" },
  picStyle: { resizeMode: "center", flex: 1, width: Dimensions.get("window").width -50, height: 100 },
  flexstuff: { flex: 1, fontSize: 25, color: "azure", margin: 20, padding: 10,
    flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-end" }
});