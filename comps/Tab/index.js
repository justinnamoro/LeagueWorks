import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: 90,
    padding: 10,
    margin: 5
  },
  border: {
    width: 90,
    borderWidth: 5,
    borderColor: "#F35B04",
    borderRadius: 50
  },
  text: {
    fontWeight: "bold",
    fontSize: "16",
    paddingBottom: 5
  }
});
const MyTab = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.border}></View>
    </View>
  );
};

MyTab.defaultProps = {
  text: "Default"
};

export default MyTab;
