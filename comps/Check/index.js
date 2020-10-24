import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F9FA",
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#F8F9FA"
  }
});
const MyCheck = () => {
  return <View style={styles.container}></View>;
};

MyCheck.defaultProps = {};

export default MyCheck;
