import React, { useId, useState } from 'react';
import { Alert, Button, SafeAreaView, TextInput, View } from 'react-native';
import { varor } from '../models/varor';

varor.map((vara) => console.log(`${vara.id}: ${vara.title}, ${vara.category}`));

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

    type SubmittedItem = { itemCategory: number; /*itemMediaTitle?: string; */itemStore: number; itemPrice: number; };
    const [submittedItems, setSubmittedItems] = useState<SubmittedItem[]>([]);
    const [itemCategory, setItemCategory] = useState(0);
    const [itemStore, setItemStore] = useState(0);
    const [itemPrice, setItemPrice] = useState(0);
    //const [itemMediaTitle, setItemMediaTitle] = useState("");
    const uniqueId = useId();
    const handleSubmit = () => {
        if(!itemCategory || !itemStore || !itemPrice) {
            Alert.alert('Egenskap(er) utelämnade!', 'Det saknas antingen giltigt kategori, lokal som varan finns i eller riktigt pris på varan. Vill du fortsätta?',
            [
                {text: 'Ja', onPress: () => {
                    console.log('Fortsatte utan att alla variabler var ifyllda.');
                }},
                {text: 'Nej', style: 'cancel', isPreferred: true, onPress: () => {
                    console.log('Avbröt kategorival.');
                    return;
                }}
            ]);
            console.log('Alla egenskaper (och titeln om varan är media) måste vara ifyllda för att lägga till en vara!');
            return;
        }

        console.log(`Lägger till varan (kategori ${itemCategory}, butik ${itemStore}, pris ${itemPrice} SEK (${itemPrice / 20} 💚)) i listan...`)
        setSubmittedItems([...submittedItems, { itemCategory, /*itemMediaTitle,*/ itemStore, itemPrice }]);
        setItemCategory(0); setItemStore(0); setItemPrice(0);
    }


    return (
        <SafeAreaView><View>
            <Button title="Hur många varor?" onPress={() => {
                console.log(`${varor.length} varor finns i listan, och ${submittedItems.length} varor i useState-varulistan.`)
            }} />
            { varor.map((varor) => (
                <li style={{padding: 5}} key={varor.id}>
                    {varor.category}, {varor.category == 6 ? `${varor.title}` : null}
                    {varor.category != 6 ? `${varor.brand}, ${varor.size}, ${varor.pattern}` : null}
                </li>
            )) }

            {/* <Button title="Generera ID" onPress={(uniqueId) => console.log('Genererar ID för varan.')} /> */}

            <label>Kategori:
                <select name="itemCategory" defaultValue="0" onChange={e => setItemCategory(Number(e.target.value))}>
                    <option value="0" disabled>(Välj kategori)</option>
                    <option value="1">Topp</option>
                    <option value="2">Byxor</option>
                    <option value="3">Skor</option>
                    <option value="4">Mössa, keps, hatt</option>
                    <option value="5">Accessoar</option>
                    <option value="6">Media (bok, film...)</option>
                </select>
            </label>
            {/*
            itemCategory == 6 ? <TextInput style={{backgroundColor: 'white'}} value={itemMediaTitle} placeholder="Vad är varans titel?" onChangeText={setItemMediaTitle} /> : null
            */}

            <label>Butik:
                <select name="itemStore" defaultValue="0" onChange={e => setItemStore(Number(e.target.value))}>
                    <option value="0" disabled>(Välj butik)</option>
                    <option value="1">Caroli</option>
                    <option value="2">Kronprinsen</option>
                </select>
            </label>
            
            { submittedItems.map((item, index) => (
                <li style={{margin: 5}} key={index}>
                    Kategori: {item.itemCategory}, Butik: {item.itemStore}, Pris: {item.itemPrice} SEK
                </li>
            )) }

            <TextInput style={{ height: 100, width: 340, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 }}
                placeholder="Vad är varans pris??"
                placeholderTextColor={"red"}
                onChangeText={text => setItemPrice(Number(text))}
                value={itemPrice.toString()}
                inputMode="numeric"
                returnKeyType="done"
            />

            <Button title="Lägg till vara" onPress={handleSubmit} />
        </View></SafeAreaView>
    );
}