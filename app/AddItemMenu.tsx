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
}

export default function AddItemMenu({ navigation } : any) {
    const [items, setItems] = useState([]);
    /*
    const addItem = item => {
      const newItem = { id: generate(), item }
      setItems([ newItem, ...items ]);
    }
    */
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
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