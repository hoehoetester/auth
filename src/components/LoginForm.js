import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import firebase from "firebase";
import { Button, Card, CardSection, Input, Spinner } from "./common";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  };

  onButtonPress() {
    this.setState({
      error: "",
      loading: true
    });
    
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({
      error: "Authentication Failed.",
      loading: false
    });
  }

  onLoginSuccess() {
    this.setState({
      email: "",
      password: "",
      error: "",
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="user@gamail.com"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>
          <Text style={styels.errorTextStyle}>{this.state.error}</Text>
          <CardSection>{this.renderButton()}</CardSection>
        </Card>
      </View>
    );
  }
}

const styels = StyleSheet.create({
  errorTextStyle: {
    color: "red",
    alignSelf: "center",
    fontSize: 20
  }
});

export default LoginForm;
