import React, { useState, useEffect, Component } from "react";
import {
  Alert,
  Button,
  TextInput,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Login extends Component {
  State = {
    username: "",
    password: "",
    token: "",
  };

  constructor(props) {
    super(props);
  }

  render() {
    const navRegister = () => {
      this.props.navigation.navigate("Register");
    };
    const navHome = () => {
      this.props.navigation.navigate("Home");
    };
    const onSubmit = async () => {
      try {
        const value = await AsyncStorage.getItem("username");
        const value2 = await AsyncStorage.getItem("password");

        if (
          value !== null &&
          value2 &&
          value === this.state.username &&
          value2 === this.state.password
        ) {
          navHome();
        } else {
          if (Platform.OS === "web") alert("Usuario o contraseña incorrectas");
          else Alert.alert("Usuario o contraseña incorrectas");
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.Uppercontainer}>
          <Text style={styles.Title}>Inicio de sesión</Text>
        </View>

        <View style={styles.Bottomcontainer}>
          <Input
            placeholder='Email'
            leftIcon={
            <Icon
              name='email'
              size={24}
              color='black'
            />}
            style={styles.input}
            onChangeText={(value) => this.setState({ username: value })}
          />
          <Input
            placeholder='Contraseña'
            leftIcon={
            <Icon
              name='shield-key'
              size={24}
              color='black'
            />}
            style={styles.input}
            onChangeText={(value) => this.setState({ password: value })}
            secureTextEntry={true}
          />
          <View style={styles.logbutton}>
            <Button
              title={"Iniciar Sesión"}
              color="dodgerblue"
              style={styles.logbutton}
              onPress={onSubmit}
            />
          </View>
          <TouchableOpacity onPress={navRegister}>
            <Text
              style={{
                color: "dodgerblue",
                fontSize: 20,
                textDecorationLine: "underline",
              }}
            >
              Create una cuenta!
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "column",
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 6,
    width: "100%",
    alignSelf: "center",
  },
  Title: {
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    position: "relative",
    marginTop: 100,
    color: "white",
  },
  Uppercontainer: {
    flex: 0.5,
    backgroundColor: "dodgerblue",
    overflow: "hidden",
  },
  Bottomcontainer: {
    marginHorizontal: 38,
    paddingTop: 50,
  },
  logbutton: {
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 10,
  },
});

export { Login };
