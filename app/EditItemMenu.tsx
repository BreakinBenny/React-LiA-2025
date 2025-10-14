import { SafeAreaView, StyleSheet, View } from 'react-native';
import EditItemForm from './components/EditItemForm';


export default function EditItemMenu({ route }: any) {
    return (
      <SafeAreaView>
        <View style={ styles.page }>
          
          <EditItemForm navigation={route.params.route} editProduct={route.params.editProduct}
          item={route.params.item} />

        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 100,
    backgroundColor: "#fffc61bb",
    justifyContent: "center",
    alignItems: "center"
  }
});