import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { generate } from "shortid";


export default function AddView() {
    const [items, setItems] = useState([]);
    const addItem = item => {
      const newItem = { id: generate(), item }
      setItems([ newItem, ...items ]);
    }
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={ styles.page }>
                <Text>Lägg till varor härifrån</Text>
            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
  page: {
    flex: 1,
    maxHeight: 600,
    backgroundColor: "#00BB00",
    justifyContent: "center",
    alignItems: "center"
  }
});