import React from 'react';
import { Text } from 'react-native';

type ProductItemProps = { title: string, image: string,
    thumb: string, shortdesc: string, category: Category,
    size: Size, valuation: 0, checkin: Date, store: Store
};

export default function ProductItem({title, image, thumb, shortdesc,
    category, size, valuation, checkin, store}: ProductItemProps) {

    return (
        //TODO: BILDEN måste visas
        //<ProductItem id="" title="" size="Small" {valuation}{'\n'} {store}</ProductItem>
        <Text>{size} {title} {shortdesc} {category}{'\n'}{'\n'}{'\n'}{valuation}{'\n'}{store}</Text>
    );
}

const enum Category {
    "Top",
    "Bottom",
    "Shoes",
    "Jacket"
}

const enum Size {
    "Small",
    "Medium",
    "Large"
}

const enum Store {
    "Caroli",
    "Kronprinsen"
}