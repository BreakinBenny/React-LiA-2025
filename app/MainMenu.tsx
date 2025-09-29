import React, { useEffect, useState } from "react";
import { Button, Dimensions, SafeAreaView, StyleSheet, View } from "react-native";

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
  }
  function deleteProduct(product: Product) {
    setProducts(products.filter(p => p.id !== product.id));
  }
  function editProduct(product: Product) {
    setProducts(products.map(p => p.id === product.id ? product : p));
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
            <SearchBar navigation={navigation} addProduct={addProduct} products={products} />

            {/* LÄGG IN FILTER HÄR… */}
            
            {/* <Text style={ styles.text }>FLATLIST</Text> */}
            <ItemList navigation={navigation} deleteProduct={deleteProduct} products={products} />
    
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