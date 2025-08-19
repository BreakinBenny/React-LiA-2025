import { Alert, Button, SafeAreaView, Text, TextInput, View } from 'react-native';
import varor from '../models/varor.json';
//import { generate } from "shortid";

export default function AddItemForm() {
    let category = 0;
    //const handleSubmit = () => { }

    return (
        <SafeAreaView>
            <View>
                <Button title="Hur många varor?" onPress={() => console.log(varor.length, 'varor finns i listan.')} />
                <Text>1: Topp{'\n'}2: Byxor{'\n'}3: Skor{'\n'}4: Headwear{'\n'}5: Accessoarer{'\n'}6: Annat</Text>
                <TextInput style={{ height: 100, width: 340, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 }}
                    placeholder="Vilken kategori har produkten (mellan 1 och 6)?"
                    placeholderTextColor={"red"}
                    //onChangeText={text => setTitle(text)}
                    //value={title}
                    inputMode="numeric"
                    returnKeyType="next"
                    onSubmitEditing={() => { if (category < 1 || category > 6 || category == null) {
                        Alert.alert('Ingen eller dåligt kategori vald', 'Giltig kategori saknas, det kommer att bli svårare att hitta produkten när filter används. Vill du fortsätta?',
                            [{text: 'Nej', style: 'cancel', onPress: () => console.log('Avbröt kategorival.')},
                            {text: 'Ja', isPreferred: true, onPress: () => console.log('Fortsatte utan giltig kategori.')}]
                        );
                    } else
                        console.log(`Du valde kategori ${category}.`);
                    }}
                />
            </View>
        </SafeAreaView>
    );
}