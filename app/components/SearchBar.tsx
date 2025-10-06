import { Button, TextInput, View } from "react-native";
import { Product } from "../models/varor";

export default function SearchBar({navigation, addProduct}:
  { navigation: any, addProduct: (product: Product) => void }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 10, padding: 5, margin: 10, backgroundColor: '#fff' }}>
      <TextInput style={{ borderColor: '#ccc', borderRadius: 5, borderWidth: 1, flex: 0.8, fontSize: 16, height: 35, paddingHorizontal: 10 }}
        placeholder="Sök..." returnKeyLabel="Sök" onEndEditing={(e) => { }}
      />
      <Button title="Lägg till en produkt" color='orange' onPress={() => {
        navigation.navigate("Lägg till produkt", { route: navigation, addProduct: addProduct });
      }} />
    </View>
  );
}