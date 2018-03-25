import React from "react";
import { StyleSheet, View } from "react-native";
import firebase from "firebase";
import firebaseconfig from "./src/settings/firebase.config";

import { Header, Button, Spinner } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

export default class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp(firebaseconfig);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Button onPress={() => firebase.auth().signOut()}>Logout</Button>
          </View>
        );
        break;
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={"Authentication"} />
        {this.renderContent()}
      </View>
    );
  }
}
