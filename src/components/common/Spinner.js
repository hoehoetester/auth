import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const Spinner = ({ size }) => (
  <View style={styles.spinnerStyles}>
    <ActivityIndicator size={size || "large"} />
  </View>
);

const styles = StyleSheet.create({
  spinnerStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export { Spinner };
