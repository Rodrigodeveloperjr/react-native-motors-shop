import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "./src/screens/SignIn";
import { SignUp } from "./src/screens/SignUp";
import { Home } from "./src/screens/Home";
import "react-native-gesture-handler";
import { PageProductDetails } from "./src/screens/PageProductDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetails" component={PageProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
