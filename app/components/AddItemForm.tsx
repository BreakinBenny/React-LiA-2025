import { Text, TextInput, View } from 'react-native';
//import { generate } from "shortid";

export default function AddItemForm() {
    return (
        <View>
            <Text>1: Topp{'\n'}2: Byxor{'\n'}3: Skor{'\n'}4: Headwear{'\n'}5: Accessoarer{'\n'}6: Annat</Text>
            <TextInput style={{ height: 100, width: 220, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 }}
                placeholder="Vilken kategori har produkten?"
                placeholderTextColor={"red"}
                //onChangeText={text => setTitle(text)}
                //value={title}
                inputMode="numeric"
                returnKeyType="next"
            />
        </View>
    );
}