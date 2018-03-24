import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, Card, CardSection, Input } from "./common";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };
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
          <CardSection>
            <Button>Login</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default LoginForm;
