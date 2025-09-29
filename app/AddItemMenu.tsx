import { SafeAreaView, StyleSheet, View } from 'react-native';
import AddItemForm from './components/AddItemForm';

import { Product } from './models/varor';

export default function AddItemMenu({route, products, addProduct}:
  {route: any, products: Product[], addProduct: (product: Product) => void}) {
    return (
      <SafeAreaView>
        <View style={ styles.page }>

          <AddItemForm navigation={route} products={route.params.products} addProduct={route.params.addProduct} />

        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 100,
    backgroundColor: "#77EE77",
    justifyContent: "center",
    alignItems: "center"
  }
});