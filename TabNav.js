import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { SettingsPage } from "./Screens/Settings";
import { Subscription } from "./Screens/Subscription";
import { Home } from "./Screens/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Summary } from "./Screens/Summary";

const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      activeColor="dodgerblue"
      inactiveColor="dimgray"
      barStyle={{ backgroundColor: "aliceblue" }}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Display"
        component={Summary}
        options={{
          tabBarLabel: "Display",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="poll-box-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          tabBarLabel: "Opciones",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Suscripcion"
        component={Subscription}
        options={{
          tabBarLabel: "Suscripcion",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export { HomeTabs };
