import { TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, margin: 10, backgroundColor: '#f0f0f0' }}>
      <TextInput style={{ flex: 1, height: 40, borderColor: '#ccc', borderWidth: 1,
          borderRadius: 5,  paddingHorizontal: 10,  fontSize: 16 }}
        placeholder="Sök..."
      />
    </View>
  );
}