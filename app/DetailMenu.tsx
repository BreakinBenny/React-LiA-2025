import React from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import ProductItem from "./models/ProductItem";

const { height, width } = Dimensions.get('window');

// TODO: Detaljvyn, här visas fler av produktens egenskaper än i huvudskärmen?
// ?
export default function DetailMenu({ route }: any) {
  return (
    <SafeAreaView>
      <View style={ styles.page }>
        <View style={{padding: 30, borderRadius: 5, flexDirection: 'row'}}>
          
          
        </View>
        <ScrollView style={{backgroundColor: 'yellow', width: 400, padding: 10}}>
          <ProductItem route={route.params.route} deleteProduct={route.params.deleteProduct} editProduct={route.params.editProduct}
          item={route.params.item}
          
          category={route.params.category} pic={route.params.pic}
          thumb={route.params.thumb} title={route.params.title} price={route.params.price}
          color1={route.params.color1} color2={route.params.color2} sold={route.params.sold}
          size={route.params.size} pattern={route.params.pattern} store={route.params.store}
          checkindate={route.params.checkindate} checkoutdate={route.params.checkoutdate}
          
          />
        </ScrollView>

        <View style={{flexDirection: 'row', margin: 15}}>
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
    padding: 5
  },
  picStyle: {
    resizeMode: "center",
    width: Dimensions.get("window").width -50, height: 100,
    flex: 1
  }
});