import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddItemForm from './components/AddItemForm';


export default function AddItemMenu({ route }: any) {
    return (
      <SafeAreaView>
        <View style={ styles.page }>

          <AddItemForm navigation={route.params.route} addProduct={route.params.addProduct} />

        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  page: {
    padding: 100,
    maxHeight: 600,
    backgroundColor: "#77EE77",
    alignItems: "center"
  }
});