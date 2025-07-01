import { Image, Text, View } from 'react-native';

type ProductItemProps = {
    title: string, pic: string, thumb: string, shortdesc: string,
    category: Category, size: Size, valuation: 0,
    checkin: Date, sold: Boolean, store: Store
};


export default function ProductItem({title, pic, thumb, shortdesc, category = 0,
    size = 0, valuation, checkin, sold, store}: ProductItemProps) {

    return (
        //TODO: BILDEN måste visas
        //<ProductItem id="" title="" size="Small" {valuation}{'\n'} {store}</ProductItem>

        <View>
            <Image id="" source={require('@/assets/images/tiny_logo.png')} />
            <Text>{size} {title}, {sold ? '' : '({valuation} 💚)'} {shortdesc}{'\n'}
                {category}{'\n'}{'\n'}
                
                {sold ? 'såldes {sold}' : 'i lager: {store}'}</Text>
        </View>
    );
}

enum Category {
    "Top"=1,
    "Bottom",
    "Shoes",
    "Jacket"
}
enum Size {
    "Small"=1,
    "Medium",
    "Large"
}
enum Store {
    "Caroli"=1,
    "Kronprinsen"
}