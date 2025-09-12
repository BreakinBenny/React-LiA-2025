import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AddItemForm from './components/AddItemForm';

export default function AddItemMenu({ navigation } : any) {
    return (
      <SafeAreaView>
        <View style={ styles.page }>
          <Text>Lägg till varor härifrån</Text>

          <AddItemForm />

        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    gap: 20,
    maxHeight: 600,
    backgroundColor: "#77EE77",
    justifyContent: "center",
    alignItems: "center"
  }
});