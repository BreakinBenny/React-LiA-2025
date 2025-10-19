import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, StyleSheet, View } from "react-native";

import ItemList from "./components/ItemList";
import SearchBar from "./components/SearchBar";
import { Product, varor } from "./models/varor";

export default function MainMenu({ navigation }: any) {
/*const [hideSold, setHideSold] = useState(false);

  const toggleHideSold = () => {
    const newHideSold = hideSold === false ? true : false;
    setHideSold(newHideSold);
  }
*/
  const [products, setProducts] = useState<Product[]>([]);
  // <ProductItem key={item.id} image={item.image}>{item.title} /></ProductItem>

  function addProduct(product: Product) {
    setProducts([...products, product]);

    console.log(`Lägger till vara "${product.title}" (ID: ${product.id})...`);
    window.alert(`Produkten "${product.title}" på ${product.price} SEK (${product.price / 20} 💚) i butik ${product.store} tillagd.\nID: ${product.id}`);
  }
  function deleteProduct(product: Product) {  //Alert m. eller utan motsvarighet här, för att bekräfta radering
    if (window.confirm("Är du säker på att du vill radera produkten?")) {
      setProducts(products.filter(p => p.id !== product.id));
      console.log(`Raderar vara...`);
      navigation.popToTop( window.alert(`Produkten "${product.title} (ID: ${product.id})" raderad.`) );

    }
  }

  function editProduct(updatedProduct: Product) {
    if (window.confirm("Är du säker på att du vill spara ändringarna?")) {
      const updatedProducts = products.map(product => {
        if (product.id === updatedProduct.id) {
          return updatedProduct;
        }
        else {
          return product;
        }
      });
      
      //setProducts(products.map(p => p.id === product.id ? product : p));
      setProducts(updatedProducts);
      console.log(`Sparar ändringar i varan...`);
      navigation.goBack( window.alert(`Sparade ändrade egenskaper på vara med ID: ${updatedProduct.id}.`) );
    }
  }

  useEffect(() => {
    // TODO: Make request to backend to fetch products
    // For now, we use the static varor array
    if(!varor.length) return;
    //loadProducts();
    setProducts(varor);
  }, [])

  useEffect(() => {
    
    
  }, [products])

    return (
        <SafeAreaView>
          <View style={ styles.page }>
            {/* <Text style={ styles.text }>HUVUDSKÄRM</Text> */}
            <SearchBar navigation={navigation} addProduct={addProduct} />

            {/* LÄGG IN FILTER HÄR… */}
            
            {/* <Text style={ styles.text }>FLATLIST</Text> */}
            <ItemList navigation={navigation} deleteProduct={deleteProduct} editProduct={editProduct} products={products} />
    
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
  }
});