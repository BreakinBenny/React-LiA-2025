import { Image, Text, View } from 'react-native';

type ProductItemProps = { title: string, pic: string,
    thumb: string, shortdesc: string, category: Category,
    size: Size, valuation: 0, checkin: Date, store: Store
};

export function ProductItem({title, pic, thumb, shortdesc, category = 0,
    size = 0, valuation, checkin, store}: ProductItemProps) {

    return (
        //TODO: BILDEN måste visas
        //<ProductItem id="" title="" size="Small" {valuation}{'\n'} {store}</ProductItem>

        <View>
            <Image id="" source={require('@/assets/images/tiny_logo.png')} />
            <Text>{size} {title}, ({valuation} 💚) {shortdesc}{'\n'}{category}{'\n'}{'\n'}{store}</Text>
        </View>
    );
}

enum Category { "N/A", "Top", "Bottom", "Shoes", "Jacket" }
enum Size { "N/A", "Small", "Medium", "Large" }
enum Store { "Caroli", "Kronprinsen" }