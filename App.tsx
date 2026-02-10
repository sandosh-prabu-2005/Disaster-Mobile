import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from "react-native"

import Home from "./src/screens/Home"
import Earthquake from "./src/screens/Earthquake"
import Landslide from "./src/screens/Landslide"
import FloodScreen from "./src/screens/FloodScreen" 
import CycloneScreen from "./src/screens/CycloneScreen"
import Chatbot from "./src/screens/Chatbot"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f1f5f9' }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#2563eb' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Earthquake" component={Earthquake} />
          <Stack.Screen name="Landslide" component={Landslide} />
          <Stack.Screen name="Flood" component={FloodScreen} />
          <Stack.Screen name="Cyclone" component={CycloneScreen} />
          <Stack.Screen name="Chatbot" component={Chatbot} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}