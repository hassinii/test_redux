import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import LoginScreen from "./src/Screens/Login/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import DrawerNavigation from "./src/Screens/DrawerNavigator/DrawerNavigation";

const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation}  options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
export default App;

