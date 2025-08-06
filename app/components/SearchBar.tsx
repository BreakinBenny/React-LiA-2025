import { Button, TextInput, View } from "react-native";

export function SearchBar({ navigation } : any) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 10, padding: 5, margin: 10, backgroundColor: '#fff' }}>
      <TextInput style={{ borderColor: '#ccc', borderRadius: 5, borderWidth: 1, flex: 0.8, fontSize: 16, height: 35, paddingHorizontal: 10 }}
        placeholder="Sök..." returnKeyLabel="Sök" onEndEditing={(e) => {}}
      />
      <Button title="Lägg till en produkt" color='orange' onPress={() => {
        navigation.navigate("Lägg till produkt");
      }} />
    </View>
  );
}