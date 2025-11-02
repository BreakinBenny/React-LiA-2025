import React, { useEffect, useState } from "react";
import { Alert, Button, Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    const productAdded = `Produkten '${product.title}' på ${product.price} SEK (${product.price / 20} 💚) i butik ${product.store} tillagd.\nID: ${product.id}`;
    setProducts([...products, product]);

    console.log(`Lägger till vara "${product.title}" (ID: ${product.id})...`);
    { Platform.OS !== 'web'
      ? ( Alert.alert(`Produkt '${product.id}' tillagd`, productAdded) )
      : ( window.alert(productAdded) )
    }
  }
  function deleteProduct(product: Product) {  //Alert m. eller utan motsvarighet här, för att bekräfta radering
    const productDeleted = `Produkten '${product.title}' (ID: ${product.id}) raderad.`;
    const confirmDelete = `Är du säker på att du vill radera produkten med ID: '${product.id}'?`;

    if (Platform.OS !== 'web') {
      Alert.alert(`Bekräfta radering`, confirmDelete, [
        { text: "Avbryt", style: "cancel" },
        { text: "Radera", style: "destructive", onPress: () => {
          setProducts(products.filter(p => p.id !== product.id));
          console.log(`Raderar vara...`);
          navigation.popToTop( Alert.alert(`Produkt raderad`, productDeleted) );
        }
      }
      ]);
    } else {
      if (window.confirm(confirmDelete)) {
        setProducts(products.filter(p => p.id !== product.id));
        console.log(`Raderar vara...`);
        navigation.popToTop( window.alert(productDeleted) );
      }
    }
  };

  function editProduct(updatedProduct: Product) {
    const productEdited = `Sparade ändrade egenskaper på vara med ID: ${updatedProduct.id}.`;
    const confirmEdit = "Är du säker på att du vill spara ändringarna?";
    
    if (Platform.OS !== 'web') {
      Alert.alert(`Bekräfta ändringar`, confirmEdit, [
        { text: "Avbryt", style: "cancel" },
        { text: "Spara", onPress: () => {
          const updatedProducts = products.map(product => {
            if (product.id === updatedProduct.id)
              return updatedProduct;
            else
              return product;
          });
        
          setProducts(updatedProducts);
          console.log(`Sparar ändringar i varan...`);
          navigation.popToTop( Alert.alert(`Ändringar sparade`, productEdited) );
        }
      }
      ]);
    } else {
      if (window.confirm(confirmEdit)) {
        const updatedProducts = products.map(product => {
          if (product.id === updatedProduct.id)
            return updatedProduct;
          else
            return product;
        });
      
        setProducts(updatedProducts);
        console.log(`Sparar ändringar i varan...`);
        navigation.popToTop( window.alert(productEdited) );
      }
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
    alignItems: "center"
  }
});