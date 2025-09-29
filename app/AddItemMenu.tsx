import { SafeAreaView, StyleSheet, View } from 'react-native';
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
    flex: 1,
    padding: 100,
    backgroundColor: "#77EE77",
    justifyContent: "center",
    alignItems: "center"
  }
});