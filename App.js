//Para installar Navigationsi es que no se guardo en el lock
//1. npm install @react-navigation/native @react-navigation/stack
//2. expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
  Settings,
} from "react-native";
//Navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "./Screens/Login";
import { Register } from "./Screens/Register";
import { HomeTabs } from "./TabNav";

function HomeScreen() {
  return <HomeTabs />;
}

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
