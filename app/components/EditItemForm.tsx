//import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Button, Platform, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import { Product } from '../models/varor';

export default function EditItemForm({navigation, item, editProduct}:
    {navigation: any, item: any, editProduct: (product: Product) => void }) {
    const [itemCategory, setItemCategory] = useState<number | null>(item.category);
    const [itemStore, setItemStore] = useState<number | null>(item.store);
    const [itemPrice, setItemPrice] = useState<number | null>(item.price);
    const [itemTitle, setItemTitle] = useState<string | null>(item.title);

    const handleSubmit = async (value: any) => {
        if(itemCategory && itemStore && itemPrice) {
            console.log("Sparar ändringar...");
            editProduct({ category: itemCategory, store: itemStore, price: itemPrice, id: item.id,
                title: itemTitle || "Ingen titel", image: "", brand: "", size: "", pattern: "",
                checkindate: new Date().toISOString().split('T')[0], sold: false, checkoutdate: "",
                thumb: ""
            });
        }
    }

    return (
        <View>
            <TextInput style={{ height: 40, width: 340, backgroundColor: 'white', marginBottom: 10, paddingLeft: 8 }}
                placeholder="Vad är varans titel?"
                onChangeText={text => setItemTitle(text)}
                value={itemTitle?.toString()}
                inputMode="text"
                returnKeyType="done"
            />
            { Platform.OS !== 'web' ? ( <>
                <Dropdown style={{ height: 40, width: 340, backgroundColor: 'white', marginBottom: 10, paddingLeft: 8 }}
                    data={[
                        { label: 'Topp', value: 1 },
                        { label: 'Byxor', value: 2 },
                        { label: 'Skor', value: 3 },
                        { label: 'Mössa, keps, hatt', value: 4 },
                        { label: 'Accessoar', value: 5 },
                        { label: 'Media (bok, film...)', value: 6 },
                    ]}
                    placeholder="Välj kategori"
                    placeholderStyle={{ color: '#AAA' }}
                    labelField="label"
                    valueField="value"
                    value={itemCategory}
                    onChange={item => { setItemCategory(item.value); }}
                />
                <Dropdown style={{ height: 40, width: 340, backgroundColor: 'white', marginBottom: 10, paddingLeft: 8 }}
                    data={[
                        { label: 'Caroli', value: 1 },
                        { label: 'Kronprinsen', value: 2 },
                    ]}
                    placeholder="Välj butik"
                    placeholderStyle={{ color: '#AAA' }}
                    labelField="label"
                    valueField="value"
                    value={itemStore}
                    onChange={item => { setItemStore(item.value); }}
                />
            </>) : ( <>
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

                <label>Butik:
                    <select name="itemStore" defaultValue="0" onChange={e => setItemStore(Number(e.target.value))}>
                        <option value="0" disabled>(Välj butik)</option>
                        <option value="1">Caroli</option>
                        <option value="2">Kronprinsen</option>
                    </select>
                </label>
            </>)}
            
            <TextInput style={{ height: 50, width: 340, backgroundColor: 'white', marginBottom: 10, paddingLeft: 8 }}
                defaultValue={item.price}
                placeholder="Vad är varans pris?"
                onChangeText={text => setItemPrice(Number(text))}
                value={itemPrice?.toString()}
                inputMode="numeric"
                returnKeyType="done"
            />

            <Button title={itemCategory && itemStore && itemPrice ? "Spara ändringar" : "Alla egenskaper måste vara ifyllda"}
                disabled={itemCategory && itemStore && itemPrice ? false : true}
                onPress={handleSubmit}
            />
        </View>
    );
}