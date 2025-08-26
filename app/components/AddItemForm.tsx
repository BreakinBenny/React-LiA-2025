import React, { useId } from 'react';
import { Alert, Button, SafeAreaView, Text, TextInput, View } from 'react-native';
import { varor } from '../models/varor';

export default function AddItemForm() {
    //let uniqueId = "";
    let category = 0;
    let image = "";
    let title = "";
    let brand = "";
    let size = "";
    let pattern = "";
    let store = 0;
    let checkindate = "";
    let sold: false;
    let checkoutdate = "";
    let price = 0;
    const uniqueId = useId();
    const handleSubmit = () => {
        
    }
    varor.map((vara) => console.log(vara.id, vara.title, vara.category));

    return (
        <SafeAreaView><View>
            <Button title="Hur många varor?" onPress={() => console.log(`${varor.length} varor finns i listan.`)} />
            <Button title="Generera ID" onPress={(uniqueId) => console.log('Genererar ID för varan.')} />
            
            <Text style={{padding: 20}}>1: Topp{'\n'}2: Byxor{'\n'}3: Skor{'\n'}4: Headwear{'\n'}5: Accessoarer{'\n'}6: Annat</Text>
            <TextInput style={{ height: 100, width: 340, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 }}
                placeholder="Vilken kategori har produkten (mellan 1 och 6)?"
                placeholderTextColor={"red"}
                //onChangeText={text => setTitle(text)}
                value={category.toString()}
                inputMode="numeric"
                returnKeyType="next"
                onSubmitEditing={() => { if (category < 1 || category > 6 || category == null) {
                    Alert.alert('Ingen eller dåligt kategori vald', 'Giltig kategori saknas, det kommer att bli svårare att hitta produkten när filter används. Vill du fortsätta?',
                    [
                        {text: 'Ja', onPress: () => console.log('Fortsatte utan giltig kategori.')},
                        {text: 'Nej', style: 'cancel', isPreferred: true, onPress: () => console.log('Avbröt kategorival.')}
                    ]);
                } else
                    console.log(`Du valde kategori ${category}.`);
                }}
            />

            <Button title="Lägg till vara" onPress={() => console.log('Lägger till varan i listan...')} />
        </View></SafeAreaView>
    );
}