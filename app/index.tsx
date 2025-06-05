import React, { useState } from "react";
import { Button, Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const { height, width } = Dimensions.get('window');


export default function Index() {
  const onButtonPress = () => {}
  const [dummy, dummyState] = useState("");
  const [text, onChangeText] = React.useState('Useless text... 🔎');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <View style={ styles.page }>
        <Text style={ styles.text }>HUVUDSKÄRM</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{ backgroundColor: 'white', height: 30, maxWidth: 200}}>
                <TextInput style={{fontSize: 25}} placeholder="Sök...                    🔎" />
            </View>
            <Text style={{fontSize: 25, color: '#BBFFBB'}}>  +</Text>
        </View>
      <ScrollView style={{margin: 50, backgroundColor: 'lightgray', maxHeight: 400, maxWidth: 400, padding: 5}}>
        <Text>-JAG FICK BILEN I HUVET!{'\n'}-(Fick du?){'\n'}-Flytta på bilfan innan den klämmer sönder mig!</Text>
        <Text>-JAG FICK BILEN I HUVET!{'\n'}-(Fick du?){'\n'}-Flytta på bilfan innan den klämmer sönder mig!</Text>
        <Text>-JAG FICK BILEN I HUVET!{'\n'}-(Fick du?){'\n'}-Flytta på bilfan innan den klämmer sönder mig!</Text>
        <Text>-JAG FICK BILEN I HUVET!{'\n'}-(Fick du?){'\n'}-Flytta på bilfan innan den klämmer sönder mig!</Text>
        <Text>-JAG FICK BILEN I HUVET!{'\n'}-(Fick du?){'\n'}-Flytta på bilfan innan den klämmer sönder mig!</Text>
        <Text>-JAG FICK BILEN I HUVET!{'\n'}-(Fick du?){'\n'}-Flytta på bilfan innan den klämmer sönder mig!</Text>
        <Text>-JAG FICK BILEN I HUVET!{'\n'}-(Fick du?){'\n'}-Flytta på bilfan innan den klämmer sönder mig!</Text>
        <Text>-JAG FICK BILEN I HUVET!{'\n'}-(Fick du?){'\n'}-Flytta på bilfan innan den klämmer sönder mig!</Text>
        <Text>-JAG FICK BILEN I HUVET!{'\n'}-(Fick du?){'\n'}-Flytta på bilfan innan den klämmer sönder mig!</Text>
        <Text>-JAG FICK BILEN I HUVET!{'\n'}-(Fick du?){'\n'}-Flytta på bilfan innan den klämmer sönder mig!</Text>
        <Text>-JAG FICK BILEN I HUVET!{'\n'}-(Fick du?){'\n'}-Flytta på bilfan innan den klämmer sönder mig!</Text>
        <Text>-JAG FICK BILEN I HUVET!{'\n'}-(Fick du?){'\n'}-Flytta på bilfan innan den klämmer sönder mig!</Text>
      
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