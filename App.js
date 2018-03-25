import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import firebaseconfig from "./src/settings/firebase.config";

import { Header } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp(firebaseconfig);
  }

  render() {
    return (
      <View>
        <Header headerText={"Authentication"} />
        <Text>An App!</Text>
        <LoginForm />
      </View>
    );
  }
}
