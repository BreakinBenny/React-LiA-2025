import React, { useId, useState } from 'react';
import { Alert, Button, Platform, SafeAreaView, TextInput, View } from 'react-native';
import { varor } from '../models/varor';

export default function AddItemForm({ navigation } : any) {
    //type SubmittedItem = { itemCategory: number; /*itemMediaTitle?: string; */itemStore: number; itemPrice: number; };

    //const [submittedItems, setSubmittedItems] = useState<Product[]>([]);
    const [itemCategory, setItemCategory] = useState<number | null>(null);
    const [itemStore, setItemStore] = useState<number | null>(null);
    const [itemPrice, setItemPrice] = useState<number | null>(null);
    const [itemTitle, setItemTitle] = useState<string | null>(null);
    //const [itemMediaTitle, setItemMediaTitle] = useState("");
    const uniqueId = useId();

    const handleSubmit = () => {
        if(itemCategory && itemStore && itemPrice) {
            varor.push({
                category: itemCategory, store: itemStore, price: itemPrice, id: uniqueId,
                title: itemTitle || "Ingen titel", image: "", brand: "", size: "", pattern: "",
                checkindate: new Date().toISOString().split('T')[0], sold: false, checkoutdate: "" });
                Platform.OS === 'web' ? console.log(
                    `Lade till vara: Kategori ${itemCategory}, Butik ${itemStore}, Pris ${itemPrice} SEK, ID ${uniqueId}`
                ) : Alert.alert('Vi har lagt till varan i registret.', '',
                    [{ text: 'OK', onPress: () => navigation.navigate('Huvudmeny') },
                        { text: 'Lägg till en till' }
                    ]);
            
            //setSubmittedItems([...submittedItems, { category, /*itemMediaTitle,*/ store, price }]);
            setItemCategory(0); setItemTitle(''); setItemStore(0); setItemPrice(0);
        }
    }


    return (
        <SafeAreaView><View>
            {/* varor.map((varor) => (
                <li style={{padding: 5}} key={varor.id}>
                    {varor.category}, {varor.category == 6 ? `${varor.title}` : null}
                    {varor.category != 6 ? `${varor.brand}, ${varor.size}, ${varor.pattern}` : null}
                </li>
            )) */}

            {/* <Button title="Generera ID" onPress={(uniqueId) => console.log('Genererar ID för varan.')} /> */}
            
            <TextInput style={{ height: 40, width: 340, backgroundColor: 'white', marginBottom: 10, paddingLeft: 8 }}
                placeholder="Vad är varans titel?"
                onChangeText={text => setItemTitle(text)}
                value={itemTitle?.toString()}
                inputMode="text"
                returnKeyType="done"
            />
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
            
            { /*varor.map((item, index) => (
                <li style={{margin: 5}} key={index}>
                    Kategori: {item.category}, Butik: {item.store}, Pris: {item.price} SEK
                </li>
            )) */}

            <TextInput style={{ height: 50, width: 340, backgroundColor: 'white', marginBottom: 10, paddingLeft: 8 }}
                placeholder="Vad är varans pris?"
                onChangeText={text => setItemPrice(Number(text))}
                value={itemPrice?.toString()}
                inputMode="numeric"
                returnKeyType="done"
            />

            <Button
                title={itemCategory && itemStore && itemPrice ? "Lägg till vara" : "Alla egenskaper måste vara ifyllda"}
                disabled={itemCategory && itemStore && itemPrice ? false : true}
                onPress={handleSubmit}
            />
        </View></SafeAreaView>
    );
}