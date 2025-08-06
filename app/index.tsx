import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddItemMenu from "./AddItemMenu";
import DetailMenu from "./DetailMenu";
import MainMenu from "./MainMenu";

const Stack = createNativeStackNavigator();

// TODO: [Utanför detaljvyn] Var är produkten på lager?
// Priset? När lades det till i databasen (så vi vet sakens ålder)?
export default function Index() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Huvudmeny" component={MainMenu} />
      <Stack.Screen name="Detailmeny" component={DetailMenu} />
      <Stack.Screen name="Lägg till produkt" component={AddItemMenu} />
    </Stack.Navigator>
  );
}