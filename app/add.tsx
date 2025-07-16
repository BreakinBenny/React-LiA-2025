import { Stack } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
//import { generate } from "shortid";


function ProductForm() {
  const [title, setTitle] = useState('');
  const [submittedProducts, setSubmittedProducts] = useState([]);

  const handleAddProduct = () => {
    if(title) {
      //setSubmittedProducts([...submittedProducts, title]);
      //setTitle('');
    }
  }
/*
  return (
    <View>
      <TextInput value={title} onChangeText={setTitle} onSubmitEditing={handleAddProduct}
        returnKeyLabel='Klar' placeholder="Vad är produkten för något?"
        style={{ width: 200, backgroundColor: 'orange', borderColor: 'gray', borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <ul>
      {
        submittedProducts.length > 0 && (
          submittedProducts.map((submittedProduct, index) => (
            <li key={index}>{submittedProduct}</li>
          ))
        )
      }
      </ul>

      <FlatList data={submittedProducts} keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      
      <Text>Produkten är en/ett… {title}</Text>
    </View>
  )
*/
}

export default function AddView() {
    const [items, setItems] = useState([]);
    /*
    const addItem = item => {
      const newItem = { id: generate(), item }
      setItems([ newItem, ...items ]);
    }
    */
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <Stack.Screen options={{ title: "Lägg till produkt(er)" }} />
            <View style={ styles.page }>
              <Text>Lägg till varor härifrån</Text>
              
              {/* <ProductForm /> */}
            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
  page: {
    flex: 1,
    gap: 20,
    maxHeight: 600,
    backgroundColor: "#00BB00",
    justifyContent: "center",
    alignItems: "center"
  }
});