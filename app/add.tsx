import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function AddView() {
    const [dummy, dummyState] = useState("");

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